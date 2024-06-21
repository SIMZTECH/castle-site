import React from 'react'
import MarketHeaderComponent from './MarketHeaderComponent';
import EventComponent from '@/Components/CastleSitePartials/EventComponent';
import MarketHandlerUtilities from '@/utilities/MarketHandlerUtilities';

function MatchResultsComponent({events,game_infor,event_infor}) {
    const {onPressGameOddHighlighter,isEventIdExistInBetSlip}=MarketHandlerUtilities();
    const {id,start_ts,strong_team,team1_name,team2_name}=game_infor;
    const {market_name,market_id,market_type}=event_infor;

    /**
      *
      * @param {*} selection //this method handles every selection of betype
      */
    function selectedMarketHandler(selection){
        onPressGameOddHighlighter(selection);
     };


  return (
      <div className="flex flex-col gap-2">
          <MarketHeaderComponent market_type={"1X2"} title={"Match Result"} />
          <div className="flex items-center w-full">
              {Object.keys(events).map((eventKey) => {
                  return (
                      <>
                          {events[eventKey].name == "W1" && (
                              <EventComponent
                                  isHighLighted={isEventIdExistInBetSlip(
                                      events[eventKey].id
                                  )}
                                  isStrongTeam={strong_team == 1}
                                  onSelectedCallBack={() => {
                                      const _data = {
                                          market_id: market_id,
                                          game_id: id,
                                          selection: events[eventKey].name,
                                          market_price: events[eventKey].price,
                                          home_team: team1_name,
                                          away_team: team2_name,
                                          competition: "",
                                          start_time: start_ts,
                                          event_id: eventKey,
                                          sport_name: "",
                                          region_name: "",
                                          market_name: market_name,
                                      };
                                      // push to betslip on click
                                      selectedMarketHandler(_data);
                                  }}
                                  name={"1"}
                                  price={events[eventKey].price}
                                  key={events[eventKey].id}
                              />
                          )}
                      </>
                  );
              })}
              {/* draw */}
              {Object.keys(events).map((eventKey) => {
                  return (
                      <>
                          {events[eventKey].name == "Draw" && (
                              <EventComponent
                                  isHighLighted={isEventIdExistInBetSlip(
                                      events[eventKey].id
                                  )}
                                  isStrongTeam={strong_team == 1}
                                  onSelectedCallBack={() => {
                                      const _data = {
                                          market_id: market_id,
                                          game_id: id,
                                          selection: events[eventKey].name,
                                          market_price: events[eventKey].price,
                                          home_team: team1_name,
                                          away_team: team2_name,
                                          competition: "",
                                          start_time: start_ts,
                                          event_id: eventKey,
                                          sport_name: "",
                                          region_name: "",
                                          market_name: market_name,
                                      };
                                      // push to betslip on click
                                      selectedMarketHandler(_data);
                                  }}
                                  name={"X"}
                                  price={events[eventKey].price}
                                  key={events[eventKey].id}
                              />
                          )}
                      </>
                  );
              })}
              {/* away win */}
              {Object.keys(events).map((eventKey) => {
                  return (
                      <>
                          {events[eventKey].name == "W2" && (
                              <EventComponent
                                  isHighLighted={isEventIdExistInBetSlip(
                                      events[eventKey].id
                                  )}
                                  isStrongTeam={strong_team == 2}
                                  onSelectedCallBack={() => {
                                      const _data = {
                                          market_id: market_id,
                                          game_id: id,
                                          selection: events[eventKey].name,
                                          market_price: events[eventKey].price,
                                          home_team: team1_name,
                                          away_team: team2_name,
                                          competition: "",
                                          start_time: start_ts,
                                          event_id: eventKey,
                                          sport_name: "",
                                          region_name: "",
                                          market_name: market_name,
                                      };
                                      // push to betslip on click
                                      selectedMarketHandler(_data);
                                  }}
                                  name={"2"}
                                  price={events[eventKey].price}
                                  key={events[eventKey].id}
                              />
                          )}
                      </>
                  );
              })}
          </div>
      </div>
  );
}

export default MatchResultsComponent;
