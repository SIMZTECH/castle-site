
import React from 'react'
import MarketHeaderComponent from './MarketHeaderComponent';
import MarketHandlerUtilities from '@/utilities/MarketHandlerUtilities';
import EventComponent from '@/Components/CastleSitePartials/EventComponent';

function HalfTimeUnderOver({eventsArr,game_infor}) {
    const {onPressGameOddHighlighter,isEventIdExistInBetSlip}=MarketHandlerUtilities();
    const {id,start_ts,strong_team,team1_name,team2_name,market_type}=game_infor;
     /**
      *
      * @param {*} selection //this method handles every selection of betype
      */
     function selectedMarketHandler(selection){
        onPressGameOddHighlighter(selection);
     };

    return (
        <div className="flex flex-col gap-2">
            <MarketHeaderComponent
                market_type={"HalfTimeOverUnder"}
                title={"1Half Over/Under"}
            />
            <div className="flex flex-col items-center w-full gap-1">
                {/* list of over under games */}
                {eventsArr.map((eventObj) => {
                    return (
                        <div className="flex w-full">
                            {/* <span>{eventObj?.name}</span> */}
                            {Object.keys(eventObj?.event).map((eventKey) => {
                                const mkt_name = eventObj?.event[eventKey].type;
                                const base = eventObj?.event[eventKey].base;
                                return (
                                    <EventComponent isHighLighted={isEventIdExistInBetSlip(eventKey)}
                                        isStrongTeam={false}
                                        onSelectedCallBack={() => {
                                            const _data = {
                                                market_id: eventObj?.id,
                                                game_id: id,
                                                selection:eventObj?.event[eventKey].name,
                                                market_price:eventObj?.event[eventKey].price,
                                                home_team: team1_name,
                                                away_team: team2_name,
                                                competition: "",
                                                start_time: start_ts,
                                                event_id: eventKey,
                                                sport_name: "",
                                                region_name: "",
                                                market_name: market_type,
                                            };
                                            // push to betslip on click
                                            selectedMarketHandler(_data);
                                        }}
                                        name={mkt_name==="Over"?`O(${base})`:`U(${base})`}
                                        price={eventObj?.event[eventKey].price}
                                        key={eventObj?.event[eventKey].id}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HalfTimeUnderOver;
