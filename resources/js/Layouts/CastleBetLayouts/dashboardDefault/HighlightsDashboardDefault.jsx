
import { storeTempContext } from '@/Context/DataStoreTemp';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { highlightKeyData } from '@/assets/store/GameFile';
import { isNil } from 'lodash';
import { useEffect } from 'react';
import { Carousel } from "flowbite-react";
import HighLightGameCardDashboardDefault from './HighLightGameCardDashboardDefault';
import { Skeleton } from '@mui/material';

const DEFAULT_SHOW_HIGHLIGHTDGAME=1;
function HighlightsDashboardDefault() {
    const navigate=useNavigate();
    const {tempSwarmData}=useContext(storeTempContext);
    const [recivedHighLightGames,setRecievedHighLight]=useState(null);

     /**
     * 
     * @returns {Array<{
     *       sport_id:number,
     *       sport_alias:string,
     *       compt_id:number,
     *       compt_name:string,
     *       reg_id:number,
     *       reg_alias:string,
     *       game:Object
     * >}}
      */
    const getHighLightedGames=()=>{
        /**
         * @type {Array<{}>}
         */
        const arr=[];
        if(!isNil(tempSwarmData?.data?.sport)){
            Object.keys(tempSwarmData?.data?.sport).map((sportKey)=>{
                const sportObj=tempSwarmData?.data?.sport[sportKey];
                Object.keys(sportObj?.region).map((regKey)=>{
                    const regObj=sportObj?.region[regKey];
                    Object.keys(regObj?.competition).map((comptKey)=>{
                        const comptObj=regObj?.competition[comptKey];
                        const foundCompetition=highlightKeyData.find((el)=>el?.compt_alias.toLowerCase()===comptObj?.name.toLowerCase())

                        if(foundCompetition){
                            arr.push({
                                sport_id:Number(sportKey),
                                sport_alias:sportObj?.alias,
                                compt_id:Number(comptKey),
                                reg_id:Number(regKey),
                                game:comptObj?.game,
                                reg_alias:regObj?.alias,
                                compt_name:comptObj?.name
                            });
                        }; 
                    })
                })
            });

            return arr;
        }

        return arr;
    };

    /**
     * 
     * @param {Array<{}>} arg 
     * @returns {Array<{}>}
     */
    const getTrancatedGames=(arg)=>{
        /**
         * @type {Array<{}>}
         */
        const arr=[];
        if(!isNil(arg)){
            Object.keys(arg).map((gameKey)=>{
                const gameObj=arg[gameKey];
                arr.push(gameObj);
            });
            return arr.slice(0,DEFAULT_SHOW_HIGHLIGHTDGAME);
        }
        return arr;
    };

    useEffect(()=>{//monitor recieved updates of the games

        if(!isNil(tempSwarmData?.data?.sport)){
            setRecievedHighLight(getHighLightedGames());
        }
    },[tempSwarmData]);

    console.log(recivedHighLightGames,"console the highlight games are here....");

  return (
    <>
        {isNil(recivedHighLightGames) &&(
            <div>
                <Skeleton width={"100%"} height={50} sx={{ bgcolor: '#dbdbdb' }} animation="wave" variant='rectangular' />
                <Skeleton width={"100%"} sx={{ bgcolor: 'gray.600' }} height={120} animation="wave" variant='rectangular'/>
            </div> 
        )}

        {!isNil(recivedHighLightGames) &&(
            <div>
                <header className="flex items-center justify-center px-2 py-4 bg-gray-800 font-poppins">
                    <p className="text-white text-[13px]">HIGHLIGHTS</p>
                </header>
                <div className="flex flex-col px-2 bg-gray-900">
                    {/* corousal showing highlights games */}
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        {!isNil(recivedHighLightGames) && (
                            <div className="flex flex-col h-full">
                                <Carousel pauseOnHover leftControl='' rightControl=''
                                theme={{
                                    "root":{
                                    "leftControl":"hidden",
                                    "rightControl":"hidden"
                                    }
                                }}
                                
                                >
                                    {recivedHighLightGames?.map((el, index) => (
                                        <div key={index}>
                                            {getTrancatedGames(el?.game).map(
                                                (game,index) => (
                                                    <div key={index}>
                                                        <HighLightGameCardDashboardDefault
                                                            key={Number(game?.id)}
                                                            competition_name={
                                                                el?.compt_name
                                                            }
                                                            fetchedGameData={game}
                                                            sport_name={
                                                                el?.sport_alias
                                                            }
                                                            sport_id={el?.sport_id}
                                                            region_id={el?.reg_id}
                                                            region_name={
                                                                el?.reg_alias
                                                            }
                                                            game_id={Number(game?.id)}
                                                            competition_id={el?.compt_id}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )}
    </> 
  );
}

export default HighlightsDashboardDefault
