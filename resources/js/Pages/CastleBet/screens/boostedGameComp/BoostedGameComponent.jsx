
import EventComponent from '@/Components/CastleSitePartials/EventComponent';
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';
import MarketHandlerUtilities from '@/utilities/MarketHandlerUtilities';
import React from 'react'
import { Link } from 'react-router-dom';
import { LuClock } from "react-icons/lu";

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
        return `/castle-site?page=game&game_id=${game_id}&compt_id=${competition_id}&reg_id=${region_id}&markt_type=All`;
    };

     /**
      *
      * @param {*} selection //this method handles every selection of betype
      */
     function selectedMarketHandler(selection){
        onPressGameOddHighlighter(selection);
     };

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
                      {/* for W1 */}
                      {Object.keys(market[keys].event).map((eventKeys) => (
                          <>
                              {market[keys].event[eventKeys].name == "W1" && (
                                  <EventComponent
                                      isHighLighted={isEventIdExistInBetSlip(
                                          market[keys].event[eventKeys].id
                                      )}
                                      isStrongTeam={strong_team == 1}
                                      onSelectedCallBack={() => {
                                          const _data = {
                                              market_id: Number(keys),
                                              game_id: Number(game_id),
                                              selection:
                                                  market[keys].event[eventKeys]
                                                      .name,
                                              market_price:
                                                  market[keys].event[eventKeys]
                                                      .price,
                                              home_team: team1_name,
                                              away_team: team2_name,
                                              competition: competition_name,
                                              start_time: start_ts,
                                              event_id: Number(eventKeys),
                                              sport_name: sport_name,
                                              region_name: region_name,
                                              market_name: market[keys].name,
                                          };
                                          // push to betslip on click
                                          selectedMarketHandler(_data);
                                      }}
                                      name={"1"}
                                      price={
                                          market[keys].event[eventKeys].price
                                      }
                                      key={market[keys].event[eventKeys].id}
                                  />
                              )}
                          </>
                      ))}
                      {/* for Draw */}
                      {Object.keys(market[keys].event).map((eventKeys) => (
                          <>
                              {market[keys].event[eventKeys].name == "Draw" && (
                                  <EventComponent
                                      isHighLighted={isEventIdExistInBetSlip(
                                          market[keys].event[eventKeys].id
                                      )}
                                      onSelectedCallBack={() => {
                                          const _data = {
                                              market_id: Number(keys),
                                              game_id: Number(game_id),
                                              selection:
                                                  market[keys].event[eventKeys]
                                                      .name,
                                              market_price:
                                                  market[keys].event[eventKeys]
                                                      .price,
                                              home_team: team1_name,
                                              away_team: team2_name,
                                              competition: competition_name,
                                              start_time: start_ts,
                                              event_id: Number(eventKeys),
                                              sport_name: sport_name,
                                              region_name: region_name,
                                              market_name: market[keys].name,
                                          };
                                          // push to betslip on click
                                          selectedMarketHandler(_data);
                                      }}
                                      isStrongTeam={false}
                                      name={"X"}
                                      price={
                                          market[keys].event[eventKeys].price
                                      }
                                      key={market[keys].event[eventKeys].id}
                                  />
                              )}
                          </>
                      ))}
                      {Object.keys(market[keys].event).map((eventKeys) => (
                          <>
                              {market[keys].event[eventKeys].name == "W2" && (
                                  <EventComponent
                                      isHighLighted={isEventIdExistInBetSlip(
                                          market[keys].event[eventKeys].id
                                      )}
                                      onSelectedCallBack={() => {
                                          const _data = {
                                              market_id: Number(keys),
                                              game_id: Number(game_id),
                                              selection:
                                                  market[keys].event[eventKeys]
                                                      .name,
                                              market_price:
                                                  market[keys].event[eventKeys]
                                                      .price,
                                              home_team: team1_name,
                                              away_team: team2_name,
                                              competition: competition_name,
                                              start_time: start_ts,
                                              event_id: Number(eventKeys),
                                              sport_name: sport_name,
                                              region_name: region_name,
                                              market_name: market[keys].name,
                                          };
                                          // push to betslip on click
                                          selectedMarketHandler(_data);
                                      }}
                                      isStrongTeam={strong_team == 2}
                                      name={"2"}
                                      price={
                                          market[keys].event[eventKeys].price
                                      }
                                      key={market[keys].event[eventKeys].id}
                                  />
                              )}
                          </>
                      ))}
                  </div>
              ))}
          </div>
      </div>
  );
}

export default BoostedGameComponent
