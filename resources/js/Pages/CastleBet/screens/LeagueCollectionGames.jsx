import { Skeleton } from '@mui/material';
import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { FaTrophy } from "react-icons/fa6";
import { useContext } from 'react';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { useEffect } from 'react';
import { useState } from 'react';
import BoostedGameComponent from './boostedGameComp/BoostedGameComponent';
import { isNil } from 'lodash';
import CastleBetFooter from '@/Components/CastleBetFooter';

function LeagueCollectionGames({onRefreshRequestUpdate,urlParams}) {
    const {tempSwarmData,getGamesByCompetition} = useContext(storeTempContext);
    const [recievedDataByCompetition,setRecievedDataByCompetition]=useState(null);
    
    useEffect(()=>{
        if(!isNil(getGamesByCompetition?.sport[1]?.region)){
            setRecievedDataByCompetition(getGamesByCompetition);
        }else{
            setRecievedDataByCompetition(null);
        }
    },[getGamesByCompetition]);


    useEffect(()=>{
        if(tempSwarmData&&isNil(recievedDataByCompetition)){
            // TODO::pass in the required params
            onRefreshRequestUpdate({
                compt_id:Number(urlParams.compt_id),
                reg_id:Number(urlParams.reg_id),
                sport_id:1
            });
        };
        console.log("i have executed for 1st time after loading temp and on refresh...");
    },[tempSwarmData]);

    // console.log(urlParams,"all the url params....");
    // console.log(recievedDataByCompetition,"the games....");
    console.log(urlParams,"all the url params....");
    console.log(recievedDataByCompetition,"game by competition and region in league collection are here...");

  return (
      <div className="flex flex-col flex-1 h-full bg-gray-50">
          {!tempSwarmData && (
              <Skeleton
                  animation="wave"
                  variant="triangular"
                  width={"100%"}
                  height={40}
              />
          )}
          {tempSwarmData && !isNil(recievedDataByCompetition) && (
              <header className="flex items-center  gap-1 h-[40px] bg-whiteSmoke text-[#03396c] text-opacity-50 font-medium border-b-[1px] px-3">
                  <span>
                      <FaTrophy />
                  </span>
                  <div className="flex items-center text-[12px]">
                      <p>{recievedDataByCompetition?.sport[1]?.alias}</p>
                      {"/"}
                      <p>
                          {
                              recievedDataByCompetition?.sport[1]?.region[urlParams.reg_id]?.alias
                          }
                      </p>
                      {"/"}
                      <p>
                          {
                              recievedDataByCompetition?.sport[1]?.region[urlParams.reg_id]?.competition[urlParams.compt_id]?.name
                          }
                      </p>
                  </div>
              </header>
          )}

          <section className="flex flex-col flex-1 px-4 pt-5 overflow-y-scroll mainHome-content">
              <div className="h-[600px]">
                  {/* show loader when fetching today games */}
                  {/* NOTE::i have reused the component for another sector */}
                  {!isNil(recievedDataByCompetition) && (
                      <>
                      {Object.keys(recievedDataByCompetition?.sport[1]?.region[urlParams.reg_id].competition[urlParams.compt_id]?.game).map((gameKey)=>{
                        const gameObj=recievedDataByCompetition?.sport[1]?.region[urlParams.reg_id].competition[urlParams.compt_id]?.game[gameKey];

                        return (//i have reused this component
                            <BoostedGameComponent
                                key={gameKey}
                                fetchedGameData={gameObj}
                                allData={recievedDataByCompetition?.sport}
                                sport_id={1}
                                region_id={urlParams.reg_id}
                                game_id={gameKey}
                                competition_id={urlParams.compt_id}
                            />
                        );
                      })}
                      </>
                  )}

                  {isNil(recievedDataByCompetition) && tempSwarmData && (
                      <div className="flex items-center self-center justify-center mt-8">
                          <ScaleLoader color="#0E76BC" size={20} />
                      </div>
                  )}
              </div>
          </section>
          <CastleBetFooter />
      </div>
  );
}

export default LeagueCollectionGames
