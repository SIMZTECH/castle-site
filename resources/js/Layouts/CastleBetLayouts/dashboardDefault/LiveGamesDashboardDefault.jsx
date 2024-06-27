
import { liveGames as liveGameIcon } from '@/assets/icons/index'
import { storeTempContext } from '@/Context/DataStoreTemp';
import { isNil } from 'lodash';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { RxQuestionMark } from "react-icons/rx";
import LiveGameDashboardDefaultComponent from './LiveGameDashboardDefaultComponent';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const DEFAULT_SHOW_LIVEGAME=2;
function LiveGamesDashboardDefault() {
    const navigate=useNavigate();
    const {liveGames,setLiveGamesUpdateKey}=useContext(storeTempContext);
    const [recivedLiveGames,setRecievedLiveGames]=useState(null);

    const requestLiveGamesUpdate=()=>{
        setLiveGamesUpdateKey((prev)=>prev+=1);
    }
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
    const extractAndSortLiveGames=()=>{
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
        if(!isNil(liveGames?.sport)){
            Object.keys(liveGames?.sport).map((sportKey)=>{
                const sportObj=liveGames?.sport[sportKey];
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
            return arr.slice(0,DEFAULT_SHOW_LIVEGAME);//return trancated data
        }
        return arr;
    };

    useEffect(()=>{//monitor recieved updates of the games

        if(!isNil(liveGames?.sport)){
            setRecievedLiveGames(extractAndSortLiveGames().slice(0,DEFAULT_SHOW_LIVEGAME));
        }

        console.log(liveGames,"the live games in live game dashboard screen............");

    },[liveGames]);

  return (
    <>
        {isNil(recivedLiveGames) &&(
          <Skeleton width={"100%"} height={50} sx={{ bgcolor: '#dbdbdb' }} animation="wave" variant='rectangular' /> 
        )}
        {!isNil(recivedLiveGames) &&(
            <div className='bg-white'>
                <header className="flex items-center px-2 py-4 bg-gray-800 font-poppins">
                    <figure className="w-[25px] h-[25px] rounded-full flex items-center justify-center">
                        <img
                            src={liveGameIcon}
                            className="w-full h-full rounded-full"
                        />
                    </figure>
                    <div className="flex items-center justify-center flex-1 gap-5 text-center">
                        <p className="text-white text-[13px]">LIVE GAMES</p>
                        <CountdownCircleTimer
                            isPlaying
                            size={25}
                            strokeWidth={2}
                            duration={10}
                            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                            colorsTime={[7, 5, 2, 0]}
                            onComplete={() => {
                                return { shouldRepeat: true, delay: 1 };
                            }}
                        >
                            {({ remainingTime }) => (
                                <span className="text-[11px] text-white font-medium">
                                    {remainingTime}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    </div>
                    <p className="bg-gray-600 h-[20px] cursor-pointer w-[20px] rounded-full flex items-center justify-center text-[12px]">
                        <RxQuestionMark />
                    </p>
                </header>
               
                <div className="flex flex-col px-3">
                    {!isNil(recivedLiveGames) && (
                        <div className='flex flex-col'>
                            {recivedLiveGames.map((el,index) => (
                                    <div key={index}>
                                        {getTrancatedGames(el?.game).map((game) =>(
                                            <LiveGameDashboardDefaultComponent
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
                                        )
                                        
                                        )}
                                    </div>
                                )
                            )}
                            <button 
                            onClick={()=>navigate("/?page=league&reg_id=all&compt_id=all&filter=live")}
                            className='text-white rounded-sm w-[40%]  outline-none font-medium mx-auto p-3 active:scale-95 bg-primaryColor text-[12px] font-poppins'>
                            More Live Games
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )}
    </>
      
  );
}

export default LiveGamesDashboardDefault
