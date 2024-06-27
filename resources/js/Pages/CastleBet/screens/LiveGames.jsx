
import { storeTempContext } from '@/Context/DataStoreTemp';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaFireFlameCurved } from "react-icons/fa6";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import LiveGameSportComponent from './liveGamesComp/LiveGameSportComponent';
import { useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import { Skeleton } from '@mui/material';
import { isNil } from 'lodash';


function LiveGames() {
    const {liveGames,tempSwarmData}=useContext(storeTempContext);

   

    useEffect(()=>{
        if(liveGames){
            console.log(liveGames?.sport,"in live games screen");
        }
    },[liveGames]);

    useEffect(()=>{
        if(tempSwarmData){
            // requestLiveGamesUpdate();//handle refresh
            return;
        }
    },[tempSwarmData]);

  return (
      <div className="flex flex-col flex-1 h-full">
          {!tempSwarmData && (
              <Skeleton
                  animation="wave"
                  variant="triangular"
                  width={"100%"}
                  height={40}
              />
          )}
          {tempSwarmData && (
              <header className="flex items-center justify-between gap-1 h-[40px] bg-whiteSmoke border-b-[1px] px-3">
                  <div className="flex items-center gap-2">
                      <span>
                          <FaFireFlameCurved />
                      </span>
                      <p> Live matches</p>
                  </div>
                  {!isNil(liveGames?.sport) && (
                      <div className="flex items-center gap-1">
                          <p className="text-[10px] text-[#0E76BC] font-medium">
                              refresh
                          </p>
                          <CountdownCircleTimer
                              isPlaying
                              size={30}
                              strokeWidth={2}
                              duration={20}
                              colors={[
                                  "#004777",
                                  "#F7B801",
                                  "#A30000",
                                  "#A30000",
                              ]}
                              colorsTime={[7, 5, 2, 0]}
                              onComplete={() => {
                                  // do your stuff here
                                  return { shouldRepeat: true, delay: 1.5 };
                              }}
                          >
                              {({ remainingTime }) => (
                                  <span className="text-[14px] text-[#0E76BC] font-medium">
                                      {remainingTime}
                                  </span>
                              )}
                          </CountdownCircleTimer>
                      </div>
                  )}
              </header>
          )}

          <section className="flex-1 px-4 pt-5 overflow-y-scroll mainHome-content">
              <div className="h-[600px]">
                  {!isNil(liveGames?.sport) && (
                      <>
                          {Object.keys(liveGames?.sport).map((sportKey) => (
                              <LiveGameSportComponent
                                  allData={liveGames?.sport}
                                  sport_id={sportKey}
                                  key={sportKey}
                                  sportData={liveGames?.sport[sportKey]}
                              />
                          ))}
                      </>
                  )}
                  {/* show loader when etching live games */}
                  {(isNil(liveGames?.sport)&&tempSwarmData) && (
                      <div className="flex items-center justify-center">
                          <ScaleLoader color="#0E76BC" size={20} />
                      </div>
                  )}
              </div>
          </section>
      </div>
  );
}

export default LiveGames;
