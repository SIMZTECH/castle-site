import React,{useRef, useEffect,useState } from 'react';
import { isNil, isNull } from 'lodash';
import WebSocketCustomHook from './WebSocketCustomHook';
import { useContext } from 'react';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { useMemo } from 'react';

export default function FetchSwarmData() {
    const {getCompAndRegParams,setGetGamesByCompetition,placeBetReqParams,setPlaceBetReqParams,liveGamesUpdateKey,getGameDetailsParams,singleLiveGamesUpdateKey,getDepositParams}=useContext(storeTempContext);
    const [isReady,swarmData,send,authData,userAuth,placeBetRes,logoutRes,registerRes,cashOutRes] = WebSocketCustomHook();

    // request session method 
    function writeSessionData() {
        const request_session = {
            command: "request_session",
            params: {
                site_id: 18762391,
                // site_id: 65,
                language: "eng",
            },
            rid: "1",
        }; //end of data structure
        send(JSON.stringify(request_session));
        console.log("i have requested the session......socket:" + isReady);
    };

    // get all available games on swarm
    const getAllFootballGamesCollection=()=>{
        const request = {
            "command": "get",
            "params": {
                "source":"betting",
                "what": { //selector
                    "sport": ['alias'], //football
                    "region": ['id','alias','order'],//europe
                    "competition":['id','name','favorite_order'],//UEFA Champions League
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
                        'info',
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

        send(JSON.stringify(request));
        console.log("i have requested all the games.....");
    };


    //request all uppcoming games in europe,asia,africa and north america order by start time
    function getUpcomingGamesByTime(params){
        const {sport_alias,region_alias_collection,time_stamp_custom}=params;
        const querry_command={
            "command":"get",
            "params":{
                "source":"betting",
                "what":{
                    "sport":["alias"],
                    "region":["alias"],
                    "competition": ['name'],
                    "game":[
                        'id',
                        'team1_id',
                        'team2_id',
                        'team1_name',
                        'team2_name',
                        'start_ts',
                        'markets_count',
                        'strong_team',
                        'add_info_name'
                    ],
                    "market":["name"],
                    "event":['id','name','price'],
                },
                "where":{
                    "sport":{
                        "alias":sport_alias
                    },
                    "region":{
                        "alias":{
                            "@in":region_alias_collection
                        },
                    },
                    "game":{
                        "start_ts":{
                            "@now":{
                                "@lte":time_stamp_custom
                            }
                        }
                    },
                    "market":{
                        "type":{
                            "@in":["P1XP2"]
                        }
                    }
                },
                "subscribe": false
            }
        };

        console.log({
            params:querry_command
        });

        send(JSON.stringify(querry_command));
    };

    /**
     *
     * @param {string} username
     * @param {string} password
     */
    const loginUserFirstTime=(formData)=>{
        const{username,password}=formData;//coming from callback in login

        const query={
            "command":"login",
            "params":{
                "username":username,
                "password":password
            },
            "rid":"2"
        };
        console.log(query,"i have sent the login request......");
        send(JSON.stringify(query));
    };

    /**
     *
     * @param {{
        * username:string,
        * password:string,
        * phone?:string,
        * email?:string,
        * first_name?:string,
        * last_name?:string,
        * currency:string
     * }}formData
     */
    const registerUser=(formData)=>{
        const {phone,password,email,username,first_name,last_name,currency}=formData;
        const query={
            "command":"register_user",
            "params":{
                "user_info":{
                    "username":username,
                    "password":password,
                    "currency_name":"ZMW",
                    "lang_code": "arm",
                    "country_code": "ZM",
                    "email": "calrogerscal@gmail.com",
                }
            },
            "rid":"11"
        };
        send(JSON.stringify(query));
        console.log(query,"i have sent the register request");
    };

    /**
     *
     * @param {number} stakeAmount
     * @param {[]} bets
     */
    const placeBetRequest = (stakeAmount, bets) => {
        /**
         * @var betsArray[]
         */
        const betsArray = [];

        bets.map((el) => {
            betsArray.push({
                event_id: el?.event_id,
                price: el?.market_price,
            });
        });

        const query = {
            command: "do_bet",
            params: {
                "type":(betsArray.length>1)?2:1,//1:single bet,3:system bet
                "mode":0,
                "amount":stakeAmount,
                "odd_type": 0,
                "bets":betsArray,
                // sys_bet: 2, //user expects 2 or 3 variants to win
            },
            "rid":"5"//unique id
        };

        send(JSON.stringify(query));
        console.log(query,"am about to send request sir....");
    };

    /**
     *
     * @param {{
     * auth_token:string
     * }} authUser
     */
    const logoutUser=(authUser)=>{
        const query={
            "command": "secure_logout",
            "params": {
                "jwe_token":authUser?.auth_token
            },
            "rid":"8"
        }
        send(JSON.stringify(query));
        console.log(query,"logout request.....");
    };

    /**
     *
     * @param {{
     * bet_id:number,
     * price:number,
     * mode:number
     * }} cashOutData
     */
    const requestCashout = (cashOutData) => {
        const{bet_id,price,mode}=cashOutData;
        const query = {
            "command": "cashout",
            "params": {
                "bet_id":bet_id,
                "price":price,
                "mode":1,
            },
            "rid":"12",
        };
        send(JSON.stringify(query));
        console.log(query,"i have requested for cashout.....");
    };

   /**
     *
     * @param {*} arg
     */
   const getAuthUserBetHistory = (arg) => {
    const query = {
        "command":"bet_history",
        "params": {
            "where":{}
        },
        "rid":"9",
    };
    console.log(query,"i have requested for bet history for this user.......");
    send(JSON.stringify(query));
};


const getUpdatesWhatsUp=()=>{
    const query={
        "command":"whats_up",
        "rid":"14"
    }
    send(JSON.stringify(query));
    console.log("i have requested for an update.....");
}


/**
 *
 * @param {{
    * game_id:number,
    * competition_id:number,
    * region_id:number
 *}} arg
 */
const getSingleGameDetails=(arg)=>{//get match scores by gamed id
    const {game_id,region_id,competition_id}=arg;

    const query={
        "command":"get",
        "params": {
            "source":"betting",
            "what": { //selector
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
                "market": [],
                "event": [],//list of all games under
            },
            "where": {//filter on selected
                "competition":{"id":competition_id},
                "region":{"id":region_id},
                "game":{"id":game_id},
                "market":{},
            },
        },
        "rid":"18"
    }

    console.log(arg,"i have requested for single game details of game_id"+game_id);
    send(JSON.stringify(query));
};



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
    send(JSON.stringify(query));
}

const getTodayGamesByTimeStamp=()=>{
    const currentDate = new Date();
    const MIUNUTES_SECONDS_CONSTANT=38399;
    const timestamp = currentDate.getTime().toString().substring(0,5).concat(MIUNUTES_SECONDS_CONSTANT);
    const trancatedTime=Number(timestamp);
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
                "game":{
                    "start_ts":{
                        "@gt":0,
                        "@lte":trancatedTime
                    }
                }
                // "competition":{
                //     "favorite":true//popular competition
                // }
            },
            // "subscribe":true,
        },
        "rid":"17",
    };

    console.log(query,"i have requested for games of today.....");
    send(JSON.stringify(query));
}

/**
 *
 * @param {{
 * compt_id:number,
 * reg_id:number,
 * sport_id:number
 * }} arg
 */

const getGameByRegionAndCompetition=(arg)=>{
    const {compt_id,reg_id,sport_id}=arg;
    const query = {
        command: "get",
        params: {
            source:"betting",
            what: { //selector
                sport: ['alias'], //football
                region: ['id','alias'],//europe
                competition:['id','name'],//UEFA Champions League
                game: [
                    'id',
                    'team1_name',
                    'team2_name',
                    'start_ts',
                    'markets_count',
                    'strong_team',
                    'type',
                    'order'
                ],
                market: ["name","type","market_type"],
                event:["id","price","order","name"]
            },
            where: {//filter on selected
                sport: {"alias":"Soccer"},
                region:{"id":reg_id},
                market:{
                    market_type:{
                        "@in":["MatchResult"]
                    }
                },
                competition:{
                    id:compt_id//popular competition
                }
            },
            // "subscribe":true,
        },
        "rid":"16",
    };

    console.log(query,"i have requested for single competition of reg id"+arg?.reg_id);
    send(JSON.stringify(query));
}

 /**
      *
      * @param {{
 * identifier:number,
 * compt_id:number|string,
 * reg_id:number|string,
 * sport_id:number
 * }}arg
 */
const getFilteredGamesCollection=(arg)=>{
    const{compt_id,reg_id,sport_id}=arg;
    /**
     *1: live games
     2: boosts games
     3: today games
     *
     */
    switch (arg?.identifier) {
        case 1:{//live games
            getAllLiveGames();
            break;
        }
        case 2:{//boosted games
            getBoostedGames();
            break;
        }
        case 3:{//today games
            getTodayGamesByTimeStamp();
            break;
        }
        default:{//other games
            getGameByRegionAndCompetition({compt_id,reg_id,sport_id});
            break;
        }
    }
};

/**
 * 
 * @param {{
 *  amount:number,
 *  currency:string,
 *  service:string,
 *  customer_id:any,
 *  customer_password:string
 * }} arg 
 */
const depositFundsHandler=(arg)=>{
    const {amount,currency,service,customer_id,customer_password}=arg;
    const query = {
        "command":"deposit",
        "params": {
            "amount":amount,
            "currency":currency,
            "service":service,
            "payer": {
                "customer_id":customer_id,
                "customer_password":customer_password
            }
        },
        "rid":"21"
    };
    console.log(query,"i have sent a deposit request to"+service);
    send(JSON.stringify(query));
}

useMemo(()=>{//execute when the params change
    if(!isNil(getCompAndRegParams)){
        setGetGamesByCompetition(null);
        setTimeout(() => {
            getGameByRegionAndCompetition(getCompAndRegParams);
        },100);
    }
},[getCompAndRegParams]);

useMemo(()=>{
    if(!isNil(getGameDetailsParams)){
        // const {game_id,region_id,competition_id}=getGameDetailsParams;
        
        getSingleGameDetails(getGameDetailsParams);    
    }

    console.log(getGameDetailsParams,"am executing the testing update....")

},[getGameDetailsParams,singleLiveGamesUpdateKey]);

useMemo(()=>{

    if(!isNil(placeBetReqParams)){
        const {stakeAmount,bets}=placeBetReqParams;
        //setPlaceBetReqParams(null);
        placeBetRequest(stakeAmount,bets);

        console.log(placeBetReqParams,"i have invocked the use memo hook to place bet......");
    }

},[placeBetReqParams]);


useMemo(()=>{
    if(!isNil(getDepositParams)){
        depositFundsHandler(getDepositParams); 
        return;  
    }
},[getDepositParams]);

    /**REQUEST ID's:::::DON'T DELETE THIS PLEASE::::::
     *1. write sessional data
     *2. login request
     *3. register request
     *4. request user profile data
     *5. place a bet request
     *6. get all games collection
     *7. restore user login
     *8. logout authenticated user
     *9. request bet history
     *10. get account balance
     *11. register user
     *12. cashout
     *13. get all games request
     *14. get live games
     *15. get boosted games
     *16. get gamebycomptandreg
     *17. get today games
     *18. get single game details by game_id
     *19. transaction history
     *20. get payments wallets
     *21. deposit
     * 
     * 
     * 
     * 
     */

    return{
        isReady,
        swarmData,
        authData,
        placeBetRequest,
        writeSessionData,
        getUpcomingGamesByTime,
        getAllFootballGamesCollection,
        loginUserFirstTime,
        userAuth,
        placeBetRes,
        logoutUser,
        logoutRes,
        registerUser,
        registerRes,
        requestCashout,
        getAuthUserBetHistory,
        getFilteredGamesCollection,
        cashOutRes,
        getUpdatesWhatsUp,
        getSingleGameDetails,
        getBoostedGames,
        getTodayGamesByTimeStamp,
        getGameByRegionAndCompetition
    };
};

