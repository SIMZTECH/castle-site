
import EventComponent from '@/Components/CastleSitePartials/EventComponent';
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';
import MarketHandlerUtilities from '@/utilities/MarketHandlerUtilities';
import { isNil } from 'lodash';
import React from 'react'
import { LuClock } from 'react-icons/lu';
import { TfiAngleRight } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

function LiveGameDashboardDefaultComponent({fetchedGameData,competition_name,sport_name,region_name,game_id,competition_id,region_id}) {
    const route=useNavigate()
    const {onPressGameOddHighlighter,isEventIdExistInBetSlip}=MarketHandlerUtilities();
    const {
        market,
        markets_count,
        start_ts,
        strong_team,
        team1_id,
        team1_name,
        team2_id,
        team2_name,
        info:{current_game_state,current_game_time,score1,score2}
    } = fetchedGameData;
   

    const routeConstruct=()=>{
        return `/?page=game&game_id=${game_id}&compt_id=${competition_id}&reg_id=${region_id}&markt_type=All`;
    };

    /**
     * 
     * @param {Array<{}>} arg 
     * @returns {Array<{
     *  id:number,
     *  price:number,
     *  order:number,
     *  name:string
     *  
     * }>}
     */
    const eventsSorterHandler=(arg)=>{
        /**
         * @type {Array<{
        *  id:number,
        *  price:number,
        *  order:number,
        *  name:string 
        * }>}
         */
        const arr=[];

        if(!isNil(arg)){
            Object.keys(arg).map((eventKeys)=>{ 
                arr.push({
                    id:arg[eventKeys].id,
                    price:arg[eventKeys].price,
                    order:arg[eventKeys].order,
                    name:arg[eventKeys].name,
                });
            })

            return arr.sort(function(a,b){return a.order-b.order});
        }

        return arr;  
    };

    /**
     * 
     * @param {string} name 
     * @returns {string}
     */
    const getEventName=(name)=>{
        switch (name.toLowerCase()) {
            case "w1":{
                return "1"
            }
            case "draw":{
                return "x"
            }
            case "w2":{
                return "2"
            }
        }
    }

     /**
      *
      * @param {*} selection //this method handles every selection of betype
      */
     function selectedMarketHandler(selection){
        onPressGameOddHighlighter(selection);
     };

  return (
      <div className="flex flex-col pt-4 mb-3 space-y-1 font-poppins">
          {/* game state */}
          <div className="flex items-center justify-between">
              <p className="flex text-[12px] items-center gap-1 font-medium text-red-700">
                  <span>
                      <LuClock />
                  </span>
                  <span className="">{current_game_time}' (Live)</span>
              </p>
              <div className="text-[12px] text-mediumYellowColor font-medium">
                  {current_game_state === "set1" && <span>{"1-Half"}</span>}
                  {current_game_state === "set2" && <span>{"2-Half"}</span>}
                  {current_game_state !== "set2" &&
                      current_game_state !== "set1" && (
                          <span>{current_game_state}</span>
                      )}
              </div>
          </div>
          <div className="flex items-center justify-between h-[40px] leading-5">
              {/* home and away team */}
              <div className="flex flex-col  text-[#03396c]">
                  <Link
                      to={routeConstruct()}
                      className="font-medium w-contain b text-[16px] hover:underline cursor-pointer"
                  >
                      {team1_name}
                  </Link>
                  <Link
                      to={routeConstruct()}
                      className="font-medium b text-[16px] hover:underline cursor-pointer"
                  >
                      {team2_name}
                  </Link>
              </div>
              <div className="flex items-center gap-1">
                  <div className="flex flex-col items-end text-[12px]">
                      <span>{score1}</span>
                      <span>{score2}</span>
                  </div>
                  <button
                      onClick={() => route(routeConstruct())}
                      className="bg-[#777777] active:scale-95 text-[#03396c] text-opacity-30 outline-none bg-opacity-30 h-[35px] rounded-sm px-1"
                  >
                      <TfiAngleRight />
                  </button>
              </div>
          </div>
          <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#5c5c5c]">
                  {sport_name}/{region_name}/{competition_name}
              </span>
              {/* available markets total */}
              <Link
                  to={routeConstruct()}
                  className="text-[11px] cursor-pointer hover:underline hover:text-opacity-100 font-poppins text-primaryColor text-opacity-70"
              >
                  Market <span>+{markets_count}</span>
              </Link>
          </div>
          {/* markets */}
          <div>
              {Object.keys(market).map((keys) => (
                  <div className="flex items-center justify-between" key={keys}>
                  
                      {eventsSorterHandler(market[keys].event).map((elv)=> (
                                  <EventComponent
                                      isHighLighted={isEventIdExistInBetSlip(elv.id)}
                                      isStrongTeam={strong_team == 1}
                                      onSelectedCallBack={() => {
                                          const _data = {
                                              market_id: Number(keys),
                                              game_id: Number(game_id),
                                              selection:elv.name,
                                              market_price:elv.price,
                                              home_team: team1_name,
                                              away_team: team2_name,
                                              competition: competition_name,
                                              start_time: start_ts,
                                              event_id: Number(elv.id),
                                              sport_name: sport_name,
                                              region_name: region_name,
                                              market_name: market[keys].name,
                                          };
                                          // push to betslip on click
                                          selectedMarketHandler(_data);
                                      }}
                                      name={getEventName(elv.name)}
                                      price={elv.price}
                                      key={elv.id}
                                  />
                              )
                      )}
                  </div>
              ))}
          </div>
      </div>
  );
}

export default LiveGameDashboardDefaultComponent
