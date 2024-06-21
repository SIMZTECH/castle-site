import React,{ useContext } from 'react';
import { IoIosFootball } from "react-icons/io";
import { FaShirt } from "react-icons/fa6";
import OddsButton from '../Buttons/OddsButton';
import {betSlipContext} from '@/Context/BetSlipContext';

function DisplayGames({dataObject,gameDetails}) {
    const {sport_id,region_id,competition_id,market_type} = gameDetails;
    const {bet_slip,dispatch} = useContext(betSlipContext);

    
    const {sport} = dataObject;

    const games = sport[sport_id]?.region[region_id]?.competition[competition_id]?.game;
    
    const [details,setdetails]= React.useState({
        sport_name:sport[sport_id]?.name,
        region_name:sport[sport_id]?.region[region_id]?.name,
        competition_name:sport[sport_id]?.region[region_id]?.competition[competition_id]?.name
    });

    /**
     * 
     * @param {{
    * 
    * }} argData
    */
   const onPressGameOddHighlighter=(argData)=>{
       const {market_id,game_id,selection,market_price,home_team,away_team,competition,start_time}=argData;
       // check if game already exists in the bet slip
       if(!isGameMarketIdExistInBetSlip(market_id)){
           // get the game from storage bet slip
           const copyObject = [...bet_slip];
           const foundGame = copyObject.find((val)=>(val?.game_id==game_id));
           // update for those games with same game_id
           if(foundGame){
               const foundGameIndex=copyObject.findIndex((val)=>val?.game_id==foundGame.game_id);
               console.log({
                   message:"found index",
                   foundGameIndex,
                   game_details:foundGame
               });
               //remove the game from bet slip {avoing duplicates}
               copyObject.splice(foundGameIndex,1); 
           }

           // ::::::::::::WE PUSH IN NEW SELECTION:::::::::::::::
           copyObject.push({
               game_id,
               home_team,
               away_team,
               start_time,
               competition,
               market_id,
               market_price,
               selection,
               bet_type:"1X2"
           });

           // put in slip in local storage
           dispatch({
               type:"LOGGED",
               payload:{
                   bet_slip:copyObject
               }
           });
           return;
       }
       // remove the game from bet slip if already exists and button pressed second time
       removeGameFromBetSlip(game_id,market_id);
   };

   /**
    * 
    * @param {number} market_id
    */
   const isGameMarketIdExistInBetSlip=(market_id)=>{
           //check the bet slip stored in context
           return (bet_slip.find((val)=>val?.market_id==market_id))?true:false; 
   }
   /**
    * 
    * @param {number} game_id 
    * @param {number} market_id 
    * @returns 
    */
   const removeGameFromBetSlip=(game_id,market_id)=>{
           //we remove the existing game
           const copyObject = [...bet_slip];
           const foundIndex=copyObject.findIndex((val)=>val?.market_id==market_id);
           
           console.log({
               message:"removed game from slip",
               game_id,
               foundIndex,
               market_id,
               market_price:copyObject[foundIndex].market_price
           });

           // remove the found object
           copyObject.splice(foundIndex,1);
            // put in slip in local storage
            dispatch({
               type:"LOGGED",
               payload:{
                   bet_slip:copyObject
               }
           });
           return;
   }
    return (
        <>
            {Object.keys(games).map((gameKey) => (
                <div
                    key={games[gameKey].id}
                    className='flex flex-col basis-[100%] sm:basis-[33%] font-poppins text-[12px]  bg-white p-3 shadow-sm rounded-sm'>
                    <div className='flex items-center justify-between mb-2'>
                        <p className='flex items-center gap-1 text-[10px]'>
                            <span className='text-[13px]'>
                                <IoIosFootball />
                            </span>
                            {details?.region_name}-{details?.competition_name}
                        </p>
                        <span className='text-[12px]'>{"01/22"}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='text-[16px] font-poppins font-semibold'>
                            <p className='flex items-center gap-1'>
                                <span className='b text-primaryColor'><FaShirt /></span>
                                {games[gameKey].team1_name}
                            </p>
                            <p className='flex items-center gap-1'>
                                <span className='text-red-500 b'><FaShirt /></span>
                                {games[gameKey].team2_name}
                            </p>
                        </div>
                        <span className='b text-primaryColor cursor-pointer font-poppins text-[16px]'>{games[gameKey].markets_count}</span>
                    </div>
                    <div className='flex items-center gap-1 pt-2'>
                        {Object.keys(games[gameKey].market).map((marketKeys) => (
                            <>
                                {Object.keys(games[gameKey].market[marketKeys].event).map((eventKeys) => (
                                    <>
                                        {games[gameKey].market[marketKeys].event[eventKeys].name == "W1" && (
                                            <OddsButton
                                                key={games[gameKey].market[marketKeys].event[eventKeys].id}
                                                type={games[gameKey].market[marketKeys].event[eventKeys].name}
                                                price={games[gameKey].market[marketKeys].event[eventKeys].price}
                                                isHighlight={isGameMarketIdExistInBetSlip(games[gameKey].market[marketKeys].event[eventKeys].id)}
                                                market_id={games[gameKey].market[marketKeys].event[eventKeys].id}
                                                callBack={((market_id, price, type) => {
                                                    const _data = {
                                                        market_id,
                                                        game_id: games[gameKey].id,
                                                        selection: type,
                                                        market_price: price,
                                                        home_team: games[gameKey].team1_name,
                                                        away_team: games[gameKey].team2_name,
                                                        competition: details?.competition_name,
                                                        start_time: '05/06/24'
                                                    }
                                                    onPressGameOddHighlighter(_data);
                                                })}
                                            />
                                        )}
                                    </>
                                ))}

                                {Object.keys(games[gameKey].market[marketKeys].event).map((eventKeys) => (
                                    <>
                                        {games[gameKey].market[marketKeys].event[eventKeys].name == "Draw" && (
                                            <OddsButton
                                                key={games[gameKey].market[marketKeys].event[eventKeys].id}
                                                type={games[gameKey].market[marketKeys].event[eventKeys].name}
                                                price={games[gameKey].market[marketKeys].event[eventKeys].price}
                                                isHighlight={isGameMarketIdExistInBetSlip(games[gameKey].market[marketKeys].event[eventKeys].id)}
                                                market_id={games[gameKey].market[marketKeys].event[eventKeys].id}
                                                callBack={((market_id, price, type) => {
                                                    const _data = {
                                                        market_id,
                                                        game_id: games[gameKey].id,
                                                        selection: type,
                                                        market_price: price,
                                                        home_team: games[gameKey].team1_name,
                                                        away_team: games[gameKey].team2_name,
                                                        competition: details?.competition_name,
                                                        start_time: '05/06/24'
                                                    }

                                                    onPressGameOddHighlighter(_data);
                                                })}
                                            />
                                        )}
                                    </>
                                ))}

                                {Object.keys(games[gameKey].market[marketKeys].event).map((eventKeys) => (
                                    <>
                                        {games[gameKey].market[marketKeys].event[eventKeys].name == "W2" && (
                                            <OddsButton
                                                key={games[gameKey].market[marketKeys].event[eventKeys].id}
                                                type={games[gameKey].market[marketKeys].event[eventKeys].name}
                                                price={games[gameKey].market[marketKeys].event[eventKeys].price}
                                                isHighlight={isGameMarketIdExistInBetSlip(games[gameKey].market[marketKeys].event[eventKeys].id)}
                                                market_id={games[gameKey].market[marketKeys].event[eventKeys].id}
                                                callBack={((market_id, price, type) => {
                                                    const _data = {
                                                        market_id,
                                                        game_id: games[gameKey].id,
                                                        selection: type,
                                                        market_price: price,
                                                        home_team: games[gameKey].team1_name,
                                                        away_team: games[gameKey].team2_name,
                                                        competition: details?.competition_name,
                                                        start_time: '05/06/24'
                                                    }

                                                    onPressGameOddHighlighter(_data);
                                                })}
                                            />
                                        )}
                                    </>
                                ))}
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default DisplayGames