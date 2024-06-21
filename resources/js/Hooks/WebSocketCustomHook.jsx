import React,{ useCallback, useEffect,useRef,useState,useContext}  from 'react';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { isNil } from 'lodash';
import { storeTempContext } from '@/Context/DataStoreTemp';
function WebSocketCustomHook() {
    const {setLiveGames,setTempSwarmData,setGetBoostedGames,setGetSingleGame,setTodayGames,setGetGamesByCompetition,placeBetResponse,setPlaceBetResponse,setGetPaymentResponse}=useContext(storeTempContext);
    const {authUser,dispatch}=useContext(authUserContext);
    const [isReady,setIsReady]=useState(false);
    const [swarmData,setSwarmData]=useState(null);
    const [authData,setAuthData]=useState(null);
    const [userAuth,setUserAuth]=useState(null);
    const [placeBetRes,setPlaceBetRes]=useState(null);
    const [logoutRes,setLogoutRes]=useState(null);
    const [socketRerender,setSocketRerender]=useState(1);
    const [registerRes,setRegisterRes]=useState(null);
    const [cashOutRes,setCashOutRes]=useState(null);

    //logoutRes

    const ws=useRef(null);

    useEffect(() => {
        const webSocket = new WebSocket(
            "wss://eu-swarm-test.betconstruct.com/"
        );

        ws.current = webSocket;

        webSocket.onopen = () => {
            setSocketRerender(socketRerender + 1);
            setTimeout(() => {
                setIsReady(true);
            }, 2500);
        };

        webSocket.onmessage = (event) => {
            const {data,rid} = JSON.parse(event?.data);

            if(rid=="1"){//session request
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
            }else if(rid=="2"){//first login request
                if(data?.auth_token){//successfull login
                    getAuthenticatedUserProfile(data);//request user details
                    // getAuthUserBetHistory();
                }else{
                    setUserAuth(data);//report to the caller error
                    console.log(data,"i have reported to the call login error......");
                }

            }else if(rid=="4"){//request user profile data
                // TODO::log user profile in store
                if (data.auth_token) {
                    logAuthenticatedUser(data);
                    // TODO::set context
                    setUserAuth(data); //report to the caller

                    // TODO::request auth bet history
                    getAuthUserBetHistory(data);
                }

            }else if(rid=="13"){
                if(data?.data?.sport){
                    setSwarmData(data);
                    setTempSwarmData(data);
                }

            }else if(rid=="5"){//place bet data
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

            }else if(rid=="7"){//restore login response
                if(data?.auth_token){
                    //TODO::Get all games request
                    getAllFootballGamesCollection();

                    // TODO::get all live games
                    getAllLiveGames();

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
                    getAllLiveGames();

                    // TODO:;get all bosted games request
                    getBoostedGames();
                }
            }else if(rid=="8"){//logout user response
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
            }else if(rid=="9"){//bet history response
                if(data){

                    const copyAuthUser={...JSON.parse(localStorage.getItem("authUser"))}
                    copyAuthUser.bet_history=data;

                    logAuthenticatedUser(copyAuthUser);

                    // reguest user transaction history
                    getUserTransactionHistory();

                    //request payment wallets
                    getPaymentWallets();
                    return;
                }
            }else if(rid=="10"){//account balance response
                if(data?.data?.profile){

                }
            }else if(rid=="11"){

                setRegisterRes(data);
                console.log(data,"user registration data res.....");

            }else if(rid=="12"){
                setCashOutRes(data);
                console.log(data,"cashout data has been recieved in socket....");

            }else if(rid=="14"){
                //Get match scores for live games
                if(data){
                    setLiveGames(data?.data);
                }
                console.log(data,"live games are here sir......");
                //TODO::Implement invock get game scores for each match present in the game collection

            }else if(rid=="15"){//boosted games request
                setGetBoostedGames(data?.data);
                console.log(data,"boosted games are here........");

            }else if(rid=="16"){//get specific games by competition and region
                setGetGamesByCompetition(data?.data);
                console.log(data,"games by competition are here........");
            }
            else if(rid=="17"){//today games
                setTodayGames(data?.data);
                console.log(data,"today games are here........");
            }
            else if(rid=="18"){//match scores
                setGetSingleGame(data);
                console.log(data,"sing game details are........");
            }else if(rid=="19"){//transaction history
                console.log(data,"transaction data history is here........");
                if(data){
                    const copyAuthUser={...JSON.parse(localStorage.getItem("authUser"))}
                    copyAuthUser.transaction_history=data;

                    logAuthenticatedUser(copyAuthUser);
                }
            }else if(rid=="20"){//transaction history
                console.log(data,"payment services data are here........");
                if(data){
                    const copyAuthUser={...JSON.parse(localStorage.getItem("authUser"))}
                    copyAuthUser.payment_services=data;
                    logAuthenticatedUser(copyAuthUser);
                }
            }else if(rid=="21"){//deposit response

                setGetPaymentResponse(data);
                console.log(data,"deposit response data is here......");
            }
        };


        webSocket.onerror = (event) => {
            console.log("socket error......",event);
        };

    }, []);

    const clearPreviousAuthData=()=>{
        dispatch({
            type:"AUTHUSERUNLOGGED",
        });
        console.log("i have cleared prev user");
    };

    const getAllLiveGames=()=>{
        const query = {
            "command": "get",
            "params": {
                "source": "betting",
                "what": { //selector
                    "sport": ['alias'], //football
                    "region": ['id','alias'],//europe
                    "competition":['id','name'],//UEFA Champions League
                    "game": [
                        'info',
                        'id',
                        'team1_name',
                        'team2_name',
                        'start_ts',
                        'markets_count',
                        'strong_team',
                        'type',
                        "live_events",
                    ],
                    "market": ["name","type","market_type"],
                    "event": [],//list of all games under
                },
                "where": {//filter on selected
                    "sport": {"alias":"Soccer"},
                    "market":{
                        "market_type":{
                            "@in":["MatchResult"]
                        }
                    },
                    "game":{
                        "type":1
                    }
                },
                "subscribe":true,
            },
            "rid": "14",
        };

        console.log(query,"i have requested for live games.....");
        ws.current.send(JSON.stringify(query));
    }

    const getBoostedGames=()=>{//popular games
        const query = {
            "command": "get",
            "params": {
                "source": "betting",
                "what": { //selector
                    "sport": ['alias'], //football
                    "region": ['id','alias'],//europe
                    "competition":['id','name','favorite','favorite_order'],//UEFA Champions League
                    "game": [
                        'id',
                        'team1_name',
                        'team2_name',
                        'start_ts',
                        'markets_count',
                        'strong_team',
                        'type',
                    ],
                    "market": ["name","type","market_type"],
                    "event": [],//list of all games under
                },
                "where": {//filter on selected
                    "sport": {"alias":"Soccer"},
                    "market":{
                        "market_type":{
                            "@in":["MatchResult"]
                        }
                    },
                    "competition":{
                        "favorite":true//popular competition
                    }
                },
                // "subscribe":true,
            },
            "rid":"15",
        };
    
        console.log(query,"i have requested for boosted games.....");
        ws.current.send(JSON.stringify(query));
    }


    // get match scores for provided game id's
    /**
     *
     * @param {*} arg
    */
    const getMatchScoresByGameId = (arg) => {
        const { sport } = arg?.data;
        /**
         * @type {Array<number>}
         */
        const arr = [];

        Object.keys(sport).map((sportKey) => {
            Object.keys(sport[sportKey].region).map((regionKey) => {
                Object.keys(sport[sportKey].region[regionKey].competition).map(
                    (comptKey) => {
                        const competition =
                            sport[sportKey].region[regionKey].competition[
                                comptKey
                            ];
                        Object.keys(competition.game).map((gameKey) => {
                            arr.push(competition.game[gameKey].id); //push in all the game id's
                        });
                    }
                );
            });
        });

        const query = {
            "command": "get_result_games",
            "params": {
                "game_id":arr,
            },
            "rid":"18",
        };
        ws.current.send(JSON.stringify(query));
        console.log(query, "i have requested for match scores.....");
    };

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
            "command":"get_user",
            "params": {},
            "rid":"4",//the id of the logged in user
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
        const query={
            "command": "restore_login",
                "params": {
                "user_id":Number(data?.user_id),
                "auth_token":data?.auth_token
            },
            "rid":"7"
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
            "command":"bet_history",
            "params": {
                "where":{
                    "from_date":(Math.floor(timeNow/1000)-(7*24*60*60)),
                    "to_date":timeNow
                }
            },
            "rid":"9",
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
            "command":"balance_history",
            "params": {
                "where":{
                    "from_date":(Math.floor(timeNow/1000)-(7*24*60*60)),
                    "to_date":timeNow,
                },
                "product":"Sport"
            },
            "rid":"19",
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




  return [isReady,swarmData,ws.current?.send.bind(ws.current),authData,userAuth,placeBetRes,logoutRes,registerRes,cashOutRes];
}

export default WebSocketCustomHook;
