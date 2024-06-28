import React,{useEffect,useRef,useState,useContext}  from 'react';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { isNil } from 'lodash';
import { storeTempContext } from '@/Context/DataStoreTemp';

function WebSocketCustomHook() {
    const {
        setLiveGames,
        setLiveGamesUpdate,
        setTempSwarmData,
        setGetBoostedGames,
        setGetSingleGame,
        setTodayGames,
        setGetGamesByCompetition,
        placeBetResponse,
        setPlaceBetResponse,
        setGetPaymentResponse,
        setRegisterRes
    }=useContext(storeTempContext);
    const {authUser,dispatch}=useContext(authUserContext);
    const [isReady,setIsReady]=useState(false);
    const [swarmData,setSwarmData]=useState(null);
    const [authData,setAuthData]=useState(null);
    const [userAuth,setUserAuth]=useState(null);
    const [placeBetRes,setPlaceBetRes]=useState(null);
    const [logoutRes,setLogoutRes]=useState(null);
    const [cashOutRes,setCashOutRes]=useState(null);

    const ws=useRef(null);

    useEffect(() => {
        const webSocket = new WebSocket("wss://eu-swarm-test.betconstruct.com/");
        if(isNil(ws.current)){
            ws.current = webSocket;
        }
        
        webSocket.onopen = () => {
            setTimeout(() => {
                setIsReady(true);
            }, 2500);
        };
    }, []);

    useEffect(()=>{
        ws.current.onmessage = (event) => {
            const {data,rid} = JSON.parse(event?.data);
            switch (rid) {
                case "1":{
                    if(data?.sid){//id present
                        setAuthData(data);
                        //TODO::check if user auth exists
                        if (!isNil(authUser?.auth_token)) {
                            restoreUserLogin(authUser);
                        } else {
                            //TODO::request all the games
                            getAllFootballGamesCollection();
    
                            // TODO::get all live games
                            getAllLiveGames();
    
                            // TODO:;get all bosted games request
                            getBoostedGames();
                        }
                    }
                }
                    break;
                case "2":{
                    if(data?.auth_token){//successfull login
                        getAuthenticatedUserProfile(data);//request user details
                    }else{
                        setUserAuth(data);//report to the caller error
                        console.log(data,"i have reported to the call login error......");
                    }
                }
                    break;
                case "3":
                    
                    break;
                case "4":{
                     // TODO::log user profile in store
                    if (data.auth_token) {
                        logAuthenticatedUser(data);
                        // TODO::set context
                        setUserAuth(data); //report to the caller
                        // TODO::request auth bet history
                        getAuthUserBetHistory(data);
                    }
                }
                    break;
                case "5":{//place bet
                    if(data?.result=="OK"){
                        //TODO::request for account balance
                        getAuthenticatedUserProfile();
                        console.log(data,"am reporting to the caller the place bet success");
                        //TODO::report to call place bets error
                        setPlaceBetResponse(data);
                        // setPlaceBetRes(data);
                    }else{
                        //TODO::report to call place bets error
                        setPlaceBetResponse(data);
                        // setPlaceBetRes(data);
                        console.log(data,"am reporting to the caller the place bet errors");
                    }
                }
                    break;
                case "6":
                    
                    break;
                case "7":{//restore user login
                    if(data?.auth_token){
                        //TODO::Get all games request
                        getAllFootballGamesCollection();
    
                        // TODO::get all live games
                        setTimeout(() => {
                            getAllLiveGames(); 
                        },2000);
                        
    
                        // TODO:;get all bosted games request
                        getBoostedGames();
    
                        //TODO::Get Authenticated user profile data
                        getAuthenticatedUserProfile(data);
    
                        console.log(data,"here is the restored user login data.....");
                        return;
                    }else{
                        console.log(data,"rejected restore session");
                        // TODO::clear prev user auth token
                        clearPreviousAuthData();
    
                        // TODO::get all games collection
                        getAllFootballGamesCollection();
    
                         // TODO::get all live games
                         setTimeout(() => {
                            getAllLiveGames(); 
                        },2000);
    
                        // TODO:;get all bosted games request
                        getBoostedGames();
                    }
                }
                    break;
                case "8":{//logout user
                     //TODO::data=null user has been logout
                    if(isNil(data)){
                        console.log(data,"recieved logout response....");
                        dispatch({
                            type:"AUTHUSERUNLOGGED",
                        });
                        setLogoutRes({data,rid});
                    }else{
                        // pass res to application
                        console.log(data,"i have passed the logout res to caller")
                        setLogoutRes({data,rid});
                    }
                }
                    break;
                case "9":{//place bet history
                    if(data){
                        const copyAuthUser={...JSON.parse(localStorage.getItem("authUser"))}
                        copyAuthUser.bet_history=data;
                        logAuthenticatedUser(copyAuthUser);
                        // reguest user transaction history
                        getUserTransactionHistory();
                        //request payment wallets
                        getPaymentWallets();
                        return;
                    }else{
                         // reguest user transaction history
                         getUserTransactionHistory();
                         //request payment wallets
                         getPaymentWallets();
                    }
                }
                    break;
                case "10":
                    
                    break;
                case "11":{//reg res
                    setRegisterRes(JSON.parse(event.data));
                }
                    break;
                case "12":{
                    setCashOutRes(data);
                    console.log(data,"cashout data has been recieved in socket....");
                }
                    break;
                case "13":{//get all games collection
                    if(data?.data?.sport){
                        setSwarmData(data);
                        setTempSwarmData(data);
                    }
                } 
                    break;
                case "14":{
                     //Get match scores for live games
                    if(!isNil(data)){
                        setLiveGames(data?.data);
                    }
                    console.log(JSON.parse(event?.data),"the live games update all.....");
                }
                    break;
                case "15":{
                    setGetBoostedGames(data?.data);
                    console.log(data,"boosted games are here........");
                }
                    break;
                case "16":{
                    setGetGamesByCompetition(data?.data);
                }
                    break;
                case "18":{//get single game details
                    console.log(data,"single game details is here in the socket....");
                    setGetSingleGame(data);
                }   
                    break;
                case "19":{//transaction history
                    console.log(data,"transaction data history is here........");
                    if(data){
                        const copyAuthUser={...JSON.parse(localStorage.getItem("authUser"))}
                        copyAuthUser.transaction_history=data;
                        logAuthenticatedUser(copyAuthUser);
                    }
                }
                    break;
                case "20":{
                    console.log(data,"payment services data are here........");
                    if(data){
                        const copyAuthUser={...JSON.parse(localStorage.getItem("authUser"))}
                        copyAuthUser.payment_services=data;
                        logAuthenticatedUser(copyAuthUser);
                    }
                }
                    break;
                case "21":{
                    setGetPaymentResponse(data);
                    console.log(data,"deposit response data is here......");
                }
                    break;
                default:
                    console.log(JSON.parse(event?.data),"the main updates.....")
                    break;
            }
        };
    
        ws.current.onerror = (event) => {
            console.log("socket error......",event);
        };
    },[ws.current]);

    const unsubscribeFromUpdate=()=>{
        const querry={
            command: "unsubscribe",
            params: {
                subid: "1674899778778092800"
            }
        }

        ws.current.send(JSON.stringify(querry));
        console.log(querry,"i have requested for unsubscribing.....");
    };

   


    const clearPreviousAuthData=()=>{
        dispatch({
            type:"AUTHUSERUNLOGGED",
        });
        console.log("i have cleared prev user");
    };

    const getAllLiveGames=()=>{
        const query = {
            command: "get",
            params: {
                source:"betting",
                what: { //selector
                    sport: ['alias'], //football
                    region: ['id','alias'],//europe
                    competition:['id','name'],//UEFA Champions League
                    game: [
                        'info',
                        'id',
                        'team1_name',
                        'team2_name',
                        'start_ts',
                        'markets_count',
                        'strong_team',
                        'type',
                        "live_events",
                        "is_live"
                    ],
                    market: ["name","type","market_type"],
                    event:["id","price","order","name"]
                },
                where: {//filter on selected
                    sport: {alias:"Soccer"},
                    market:{
                        market_type:{
                            "@in":["MatchResult"]
                        }
                    },
                    game:{'is_live':1}
                },
                // subscribe:true,
            },
            rid: "14",
        };

        
        setTimeout(() => {
            ws.current.send(JSON.stringify(query));
            console.log(query,"i have requested for live games.....");
        },2000);
        
    }

    const getBoostedGames=()=>{//popular games
        const query = {
            command: "get",
            params: {
                source: "betting",
                what: {
                    //selector
                    sport: ["alias"], //football
                    region: ["id", "alias"], //europe
                    competition: ["id", "name", "favorite", "favorite_order"], //UEFA Champions League
                    game: [
                        "id",
                        "team1_name",
                        "team2_name",
                        "start_ts",
                        "markets_count",
                        "strong_team",
                        "type",
                    ],
                    market: ["name", "type", "market_type"],
                    event:["id","price","order","name"]
                },
                where: {
                    //filter on selected
                    sport: { alias: "Soccer" },
                    market: {
                        market_type: {
                            "@in": ["MatchResult"],
                        },
                    },
                    competition: {
                        favorite: true, //popular competition
                    },
                },
            },
            rid: "15",
        };
    
        console.log(query,"i have requested for boosted games.....");
        ws.current.send(JSON.stringify(query));
    }


     // get all available games on swarm
     const getAllFootballGamesCollection=()=>{
        const request = {
            "command": "get",
            "params": {
                "source":"betting",
                "what": { //selector
                    "sport": ['alias'], //football
                    "region": ['id','alias'],//europe
                    "competition":['id','name','alias','favorite','favorite_order'],//UEFA Champions League
                    "game": [
                        'id',
                        'team1_id',
                        'team2_id',
                        'team1_name',
                        'team2_name',
                        'start_ts',
                        'markets_count',
                        'market',
                        'strong_team',
                        'add_info_name',
                        'market'
                    ],
                    "market": ["name","type","market_type"],
                    "event": [],//list of all games under
                },
                "where": {//filter on selected
                    "sport": {"alias":"Soccer"},
                    "market":{
                        "market_type":{
                            "@in":["DoubleChance","MatchResult","OverUnder"]
                        }
                    }
                },
                "subscribe": false
            },
            "rid":"13"
        };

        ws.current.send(JSON.stringify(request));
        console.log("i have requested all the games.....");
    };

     //method to get authenticated user details
    /**
     *
     * @param {*} authUser
     */
    const getAuthenticatedUserProfile = (authUser) => {
        const query = {
            command: "get_user",
            params: {},
            rid: "4", //the id of the logged in user
        };
        ws.current.send(JSON.stringify(query));
    };


    /**
     *
     * @param {*} data
     */
    const logAuthenticatedUser=(data)=>{
        console.log(data,"authenticated user stored in store....");
        dispatch({
            type:"AUTHUSERLOGGED",
            payload:{
                authUser:data
            }
        });
    };

    /**
     *
     * @param {{
     * auth_token:string,
     * user_id:number
     * }} data
     */
    const restoreUserLogin=(data)=>{
        const query = {
            command: "restore_login",
            params: {
                user_id: Number(data?.user_id),
                auth_token: data?.auth_token,
            },
            rid: "7",
        };
        console.log(query,"i have requested to re-store login.......");
        ws.current.send(JSON.stringify(query));
    };


    /**
     * @type  {Date} timeNow
     */
    const timeNow = new Date().getTime();

    /**
     *
     * @param {*} arg
     */
    const getAuthUserBetHistory = (arg) => {
        const query = {
            command: "bet_history",
            params: {
                where: {
                    from_date: Math.floor(timeNow / 1000) - 7 * 24 * 60 * 60,
                    to_date: timeNow,
                },
            },
            rid: "9",
        };
        console.log(query,"i have requested for bet history for this user.......");
        ws.current.send(JSON.stringify(query));
    };

    // get transaction history
    /**
     *
     * @param {*} arg
     */
    const getUserTransactionHistory = (arg) => {
        /**
         * @type  {Date} timeNow
         */
        const timeNow = new Date().getTime();
        //histroy for the past 3 month 2629743, 3*30.44x24x60x60
        //history for the past 7 days 7x24x60x60, 604800
        const query = {
            command: "balance_history",
            params: {
                where: {
                    from_date: Math.floor(timeNow / 1000) - 7 * 24 * 60 * 60,
                    to_date: timeNow,
                },
                product: "Sport",
            },
            rid: "19",
        };
        console.log(query,"i have requested transaction history.......");
        ws.current.send(JSON.stringify(query));
    };

    // get payments wallets
    /**
     *
     * @param {*} arg
     */
    const getPaymentWallets=(arg)=>{
        const query = {
            "command":"payment_services",
            "params": {
                "detailed": true
            },
            "rid":"20",
        };
        console.log(query,"i have requested payments wallets.......");
        ws.current.send(JSON.stringify(query));
    }





  return [isReady,swarmData,ws.current?.send.bind(ws.current),authData,userAuth,placeBetRes,logoutRes,cashOutRes,ws.current];
}

export default WebSocketCustomHook;
