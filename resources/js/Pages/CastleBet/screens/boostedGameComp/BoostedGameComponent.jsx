
import EventComponent from '@/Components/CastleSitePartials/EventComponent';
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';
import MarketHandlerUtilities from '@/utilities/MarketHandlerUtilities';
import React from 'react'
import { Link } from 'react-router-dom';
import { LuClock } from "react-icons/lu";
import { isNil } from 'lodash';

function BoostedGameComponent({fetchedGameData,allData,sport_id,region_id,competition_id,game_id}){
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
    } = fetchedGameData;

    const {formattedDate,formattedTime} = formatDateByTimeStamp(start_ts);
    const competition_name=allData[sport_id].region[region_id].competition[competition_id].name;
    const sport_name=allData[sport_id].alias;
    const region_name=allData[sport_id].region[region_id].alias;

    const routeConstruct=()=>{
        return `/?page=game&game_id=${game_id}&compt_id=${competition_id}&reg_id=${region_id}&markt_type=All`;
    };

     /**
      *
      * @param {*} selection //this method handles every selection of betype
      */
     function selectedMarketHandler(selection){
        onPressGameOddHighlighter(selection);
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

  return (
      <div className="flex flex-col pt-4 mb-3 space-y-1 font-poppins">
          {/* time and date */}
          <p className="text-[11px] flex items-center gap-1 text-black">
              <span>{`${formattedTime}`}</span>
              <span className="">{formattedDate}</span>
          </p>
          <div>
              {/* home tean name */}
              <p className="font-medium text-[#03396c] w-contain b text-[16px] hover:underline cursor-pointer">
                 {team1_name}
              </p>
              {/* away tean name */}
              <p className="font-medium text-[#03396c] w-contain b text-[16px] hover:underline cursor-pointer">
                {team2_name}
              </p>
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

export default BoostedGameComponent
