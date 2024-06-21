import React, { useEffect, useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import FullTimeEventCard from './FullTimeEventCard';
import DoubleChanceEventCard from './DoubleChanceEventCard';
import OverUnderEventCard from './OverUnderEventCard';
import MarketHandlerUtilities from '@/utilities/MarketHandlerUtilities';

function MarketEventCard({eventData,market_name,market_id,market_type,totalGoalMarketOption,fixedGameDetails}){
    const {onPressGameOddHighlighter,isEventIdExistInBetSlip}=MarketHandlerUtilities();
    const [totalGoalsOptionState,setTotalGoalsOptionState]=useState([]);
    const { team1_name,team2_name,start_ts,sport_name,region_name,competition_name,game_id}=fixedGameDetails;

    useEffect(()=>{
        // get all the over/under game market
        if(totalGoalMarketOption){
            Object.keys(totalGoalMarketOption).map((totalGoalsKey)=>{
                if(totalGoalMarketOption[totalGoalsKey].type=="OverUnder"){
                    totalGoalsOptionState.push({
                        id:totalGoalsKey,
                        data:totalGoalMarketOption[totalGoalsKey]
                    });
                }
            });
        }
    },[]);

    console.log(totalGoalsOptionState);

     /**
      *
      * @param {*} selection //this method handles every selection of betype
      */
     function selectedMarketHandler(selection){
        onPressGameOddHighlighter(selection);
     };

    return (
        <div className="mb-2 font-poppins text-[13px]">
            <header className="flex items-center px-2 py-1 text-white b bg-primaryColor font-poppins text-[12px] gap-1">
                <div>
                    {totalGoalsOptionState.length>0 && (
                        <p>
                            {/* get the first element because they all have the same name */}
                            {totalGoalsOptionState[1]?.name} <span>|</span>{" "}
                            {totalGoalsOptionState[1]?.type}
                        </p>
                    )}

                    {/* not totalGoals option */}
                    {totalGoalsOptionState.length<1 && (
                        <p>
                            {market_name} <span>|</span>{" "}
                            {market_type == "1X12X2"? "12": market_type == "P1XP2"? "1X2": market_type}
                        </p>
                    )}
                </div>
                <span className="text-[17px] cursor-pointer">
                    <IoInformationCircle />
                </span>
            </header>
            {/* market odds */}
            <main>
                {/* filter for full time */}
                {totalGoalsOptionState.length<1 && market_type == "P1XP2" && (
                    <div className="flex items-center mt-1 border">
                        {/* w1 */}
                        {Object.keys(eventData).map((eventDataKey, index) => (
                            <>
                                {eventData[eventDataKey].name == "W1" && (
                                    <div className="basis-[33.33%] flex items-center">
                                        <FullTimeEventCard
                                            market_type={eventData[eventDataKey].name}
                                            key={eventData[eventDataKey].id}
                                            price={eventData[eventDataKey].price}
                                            isHighlighted={isEventIdExistInBetSlip(eventData[eventDataKey].id)}
                                            callBackHandler={() =>{
                                                const optionData={
                                                    game_id,
                                                    market_id,
                                                    event_id:eventData[eventDataKey].id,
                                                    selection:eventData[eventDataKey].name,
                                                    market_price:eventData[eventDataKey].price,
                                                    home_team:team1_name,
                                                    away_team:team2_name,
                                                    start_time:start_ts,
                                                    sport_name,
                                                    region_name,
                                                    competition:competition_name,
                                                    market_name:market_name
                                                }

                                                selectedMarketHandler(optionData);
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        ))}

                        {/* draw */}
                        {Object.keys(eventData).map((eventDataKey, index) => (
                            <>
                                {eventData[eventDataKey].name == "Draw" && (
                                    <div className="basis-[33.33%] flex items-center">
                                        <FullTimeEventCard
                                            market_type={eventData[eventDataKey].name}
                                            key={eventData[eventDataKey].id}
                                            price={eventData[eventDataKey].price}
                                            isHighlighted={isEventIdExistInBetSlip(eventData[eventDataKey].id)}
                                            callBackHandler={() =>{
                                                const optionData={
                                                    game_id,
                                                    market_id,
                                                    event_id:eventData[eventDataKey].id,
                                                    selection:eventData[eventDataKey].name,
                                                    market_price:eventData[eventDataKey].price,
                                                    home_team:team1_name,
                                                    away_team:team2_name,
                                                    start_time:start_ts,
                                                    sport_name,
                                                    region_name,
                                                    competition:competition_name,
                                                    market_name:market_name
                                                }

                                                selectedMarketHandler(optionData);
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        ))}
                        {/* w2 */}
                        {Object.keys(eventData).map((eventDataKey, index) => (
                            <>
                                {eventData[eventDataKey].name == "W2" && (
                                    <div className="basis-[33.33%] flex items-center">
                                        <FullTimeEventCard
                                            market_type={eventData[eventDataKey].name}
                                            key={eventData[eventDataKey].id}
                                            price={eventData[eventDataKey].price}
                                            isHighlighted={isEventIdExistInBetSlip(eventData[eventDataKey].id)}
                                            callBackHandler={() =>{
                                                const optionData={
                                                    game_id,
                                                    market_id,
                                                    event_id:eventData[eventDataKey].id,
                                                    selection:eventData[eventDataKey].name,
                                                    market_price:eventData[eventDataKey].price,
                                                    home_team:team1_name,
                                                    away_team:team2_name,
                                                    start_time:start_ts,
                                                    sport_name,
                                                    region_name,
                                                    competition:competition_name,
                                                    market_name:market_name
                                                }

                                                selectedMarketHandler(optionData);
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                )}

                {/* filter for double chance */}
                {totalGoalsOptionState.length<1 && market_type == "1X12X2" && (
                    <div className="flex items-center mt-1 border">
                        {/* 1X or P1X */}
                        {Object.keys(eventData).map((eventDataKey, index) => (
                            <>
                                {eventData[eventDataKey].name == "1X" && (
                                    <div className="basis-[33.33%] flex items-center">
                                        <DoubleChanceEventCard
                                            market_type={eventData[eventDataKey].name}
                                            key={eventData[eventDataKey].id}
                                            price={eventData[eventDataKey].price}
                                            isHighlighted={isEventIdExistInBetSlip(eventData[eventDataKey].id)}
                                            callBackHandler={() =>{
                                                const optionData={
                                                    game_id,
                                                    market_id,
                                                    event_id:eventData[eventDataKey].id,
                                                    selection:eventData[eventDataKey].name,
                                                    market_price:eventData[eventDataKey].price,
                                                    home_team:team1_name,
                                                    away_team:team2_name,
                                                    start_time:start_ts,
                                                    sport_name,
                                                    region_name,
                                                    competition:competition_name,
                                                    market_name:market_name
                                                }

                                                selectedMarketHandler(optionData);
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        ))}
                        {/* 12 */}
                        {Object.keys(eventData).map((eventDataKey, index) => (
                            <>
                                {eventData[eventDataKey].name == "12" && (
                                    <div className="basis-[33.33%] flex items-center">
                                        <DoubleChanceEventCard
                                            market_type={eventData[eventDataKey].name}
                                            key={eventData[eventDataKey].id}
                                            price={eventData[eventDataKey].price}
                                            isHighlighted={isEventIdExistInBetSlip(eventData[eventDataKey].id)}
                                            callBackHandler={() =>{
                                                const optionData={
                                                    game_id,
                                                    market_id,
                                                    event_id:eventData[eventDataKey].id,
                                                    selection:eventData[eventDataKey].name,
                                                    market_price:eventData[eventDataKey].price,
                                                    home_team:team1_name,
                                                    away_team:team2_name,
                                                    start_time:start_ts,
                                                    sport_name,
                                                    region_name,
                                                    competition:competition_name,
                                                    market_name:market_name
                                                }

                                                selectedMarketHandler(optionData);
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        ))}
                        {/* X2 */}
                        {Object.keys(eventData).map((eventDataKey, index) => (
                            <>
                                {eventData[eventDataKey].name == "X2" && (
                                    <div className="basis-[33.33%] flex items-center">
                                        <DoubleChanceEventCard
                                            market_type={eventData[eventDataKey].name}
                                            key={eventData[eventDataKey].id}
                                            price={eventData[eventDataKey].price}
                                            isHighlighted={isEventIdExistInBetSlip(eventData[eventDataKey].id)}
                                            callBackHandler={() =>{
                                                const optionData={
                                                    game_id,
                                                    market_id,
                                                    event_id:eventData[eventDataKey].id,
                                                    selection:eventData[eventDataKey].name,
                                                    market_price:eventData[eventDataKey].price,
                                                    home_team:team1_name,
                                                    away_team:team2_name,
                                                    start_time:start_ts,
                                                    sport_name,
                                                    region_name,
                                                    competition:competition_name,
                                                    market_name:market_name
                                                }

                                                selectedMarketHandler(optionData);
                                            }}
                                        />
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                )}

                {/* filter for total goals */}
                {totalGoalsOptionState.length>0 && (
                    <div className='flex flex-col mt-2 space-y-1'>
                        {/* loop through the over under list item card */}
                        {Object.keys(totalGoalsOptionState).map((totalGoalsDataKey,index)=>{
                                return (
                                    <div className="flex items-center" key={index}>
                                        <div className="flex items-center w-full border">
                                            {/* actual odds under*/}
                                            {/* left */}
                                            <div className='basis-[50%]'>
                                                {Object.keys(totalGoalsOptionState[totalGoalsDataKey]?.data?.event).map((totalGoalsEventKey) => (
                                                    <div className="" key={totalGoalsEventKey}>
                                                        {totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].type == "Under" && (
                                                            <div className="">
                                                                <OverUnderEventCard
                                                                    market_type={totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].type}
                                                                    price={totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].price}
                                                                    isHighlighted={isEventIdExistInBetSlip(Number(totalGoalsEventKey))}
                                                                    callBackHandler={() =>{
                                                                        const optionData={
                                                                            game_id,
                                                                            market_id:Number(totalGoalsOptionState[totalGoalsDataKey]?.id),
                                                                            event_id:Number(totalGoalsEventKey),
                                                                            selection:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].type,
                                                                            market_price:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].price,
                                                                            home_team:team1_name,
                                                                            away_team:team2_name,
                                                                            start_time:start_ts,
                                                                            sport_name,
                                                                            region_name,
                                                                            competition:competition_name,
                                                                            base:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].base,
                                                                            market_name:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].name
                                                                        }

                                                                        selectedMarketHandler(optionData);
                                                                    }}
                                                                    marketBase={totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].base}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            {/* right */}
                                            <div className='basis-[50%]'>
                                                {/* actual odds over*/}
                                                {Object.keys(totalGoalsOptionState[totalGoalsDataKey]?.data?.event).map((totalGoalsEventKey) => (
                                                    <div className="" key={totalGoalsEventKey}>
                                                        {totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].type == "Over" && (
                                                            <div className="">
                                                                <OverUnderEventCard
                                                                    market_type={totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].type}
                                                                    price={totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].price}
                                                                    isHighlighted={isEventIdExistInBetSlip(Number(totalGoalsEventKey))}
                                                                    callBackHandler={() =>{
                                                                        const optionData={
                                                                            game_id,
                                                                            market_id:Number(totalGoalsOptionState[totalGoalsDataKey]?.id),
                                                                            event_id:Number(totalGoalsEventKey),
                                                                            selection:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].type,
                                                                            market_price:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].price,
                                                                            home_team:team1_name,
                                                                            away_team:team2_name,
                                                                            start_time:start_ts,
                                                                            sport_name,
                                                                            region_name,
                                                                            competition:competition_name,
                                                                            base:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].base,
                                                                            market_name:totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].name
                                                                        }

                                                                        selectedMarketHandler(optionData);
                                                                    }}
                                                                    marketBase={totalGoalsOptionState[totalGoalsDataKey]?.data?.event[totalGoalsEventKey].base}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}

export default MarketEventCard
