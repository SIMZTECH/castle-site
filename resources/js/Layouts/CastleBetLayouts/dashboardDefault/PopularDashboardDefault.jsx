
import GameCard from '@/Components/CastleSitePartials/GameCard';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { isNil } from 'lodash';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GameCardDashBoardDefault from './GameCardDashBoardDefault';
import { Skeleton } from '@mui/material';

const DEFAULT_SHOW_BOOSTEDGAME=2;
function PopularDashboardDefault() {
    const navigate=useNavigate();
    const {getBoostedGames,setGetBoostedGames,}=useContext(storeTempContext);
    const [recivedBoostedGames,setRecievedBoostedGames]=useState(null);

     // method to extract and order all the live games
    /**
     * 
     * @returns {Array<{
    *  sport_id:number,
    *       sport_alias:string,
    *       compt_id:number,
    *       compt_name:string,
    *       reg_id:number,
    *       reg_alias:string,
    *       game:Object
    * 
    * >}}
     */
    const extractAndSortBoostedGames=()=>{
        /**
         * @type {Array<{
         *  sport_id:number,
         *  sport_alias:string,
         *  compt_id:number,
         *  compt_name:string,
         *  reg_id:number,
         *  reg_alias:string,
         *  game:Object
         * 
         * }>}
         */
        const arr=[];
        if(!isNil(getBoostedGames?.sport)){
            Object.keys(getBoostedGames?.sport).map((sportKey)=>{
                const sportObj=getBoostedGames?.sport[sportKey];
                Object.keys(sportObj?.region).map((regKey)=>{
                    const regObj=sportObj?.region[regKey];
                    Object.keys(regObj?.competition).map((comptKey)=>{
                        const comptObj=regObj?.competition[comptKey];
                        arr.push({
                            sport_id:Number(sportKey),
                            sport_alias:sportObj?.alias,
                            compt_id:Number(comptKey),
                            reg_id:Number(regKey),
                            game:comptObj?.game,
                            reg_alias:regObj?.alias,
                            compt_name:comptObj?.name
                        });
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
            return arr.slice(0,DEFAULT_SHOW_BOOSTEDGAME);
        }
        return arr;
    };

    useEffect(()=>{//monitor recieved updates of the games

        if(!isNil(getBoostedGames?.sport)){
            setRecievedBoostedGames(extractAndSortBoostedGames().slice(0,DEFAULT_SHOW_BOOSTEDGAME));
        }

    },[getBoostedGames]);


    console.log(recivedBoostedGames,"the boosted games in dashboard boosts default....");
  return (
    <>
        {isNil(recivedBoostedGames) &&(
          <Skeleton width={"100%"} height={50} sx={{ bgcolor: '#dbdbdb' }} animation="wave" variant='rectangular' /> 
        )}

        {!isNil(recivedBoostedGames) &&(
            <div>
                <header className="flex items-center justify-center px-2 py-4 bg-gray-800 font-poppins">
                    <div className="text-white flex-col flex items-center justify-center text-[13px]">
                        <p>BOOSTED ODDS</p>
                        <p className="font-medium text-mediumYellowColor">
                            BIGGEST ODDS IN AFRICA
                        </p>
                    </div>
                </header>
                {/* display the sample of live games */}
                <div className="flex flex-col px-3">
                    {!isNil(recivedBoostedGames) && (
                        <div className="flex flex-col">
                            {recivedBoostedGames?.map((el, index) => (
                                <div key={index}>
                                    {getTrancatedGames(el?.game).map((game) => (
                                        <GameCardDashBoardDefault
                                            key={Number(game?.id)}
                                            competition_name={el?.compt_name}
                                            fetchedGameData={game}
                                            sport_name={el?.sport_alias}
                                            sport_id={el?.sport_id}
                                            region_id={el?.reg_id}
                                            region_name={el?.reg_alias}
                                            game_id={Number(game?.id)}
                                            competition_id={el?.compt_id}
                                        />
                                    ))}
                                </div>
                            ))}

                            {/* button for loading more games */}
                                <button
                                    onClick={() =>
                                        navigate(
                                            "/?page=league&reg_id=all&compt_id=all&filter=boosted"
                                        )
                                    }
                                    className="text-white rounded-sm w-[40%]  outline-none font-medium mx-auto p-3 active:scale-95 bg-primaryColor text-[12px] font-poppins"
                                >
                                    More Boosted Games
                                </button>
                        </div>
                    )}
                    
                </div>
            </div>
        )}
    </>
      
  );
}

export default PopularDashboardDefault
