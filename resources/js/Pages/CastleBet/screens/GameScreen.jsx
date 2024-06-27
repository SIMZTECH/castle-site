import ScreenContentLayout from '@/Layouts/CastleBetLayouts/ScreenContentLayout';
import React, { useContext } from 'react';
import { IoHome } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { useState } from 'react';
import MarketEventCard from '@/Components/CastleSitePartials/MarketEventCard';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { useEffect } from 'react';
import { SwarmDataContext } from '@/Context/SwarmDataContext';
import CastleBetFooter from '@/Components/CastleBetFooter';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { Skeleton } from '@mui/material';
import { ScaleLoader } from 'react-spinners';
import MatchResultsComponent from '@/Layouts/CastleBetLayouts/markets_components/MatchResultsComponent';
import DoubleChanceComponent from '@/Layouts/CastleBetLayouts/markets_components/DoubleChanceComponent';
import OverUndersComponent from '@/Layouts/CastleBetLayouts/markets_components/OverUndersComponent';
import OldEvenComponent from '@/Layouts/CastleBetLayouts/markets_components/OldEvenComponent';
import { LuClock } from 'react-icons/lu';
import BothTeamsToScoreComponent from '@/Layouts/CastleBetLayouts/markets_components/BothTeamsToScoreComponent';
import HalfTimeUnderOver from '@/Layouts/CastleBetLayouts/markets_components/HalfTimeUnderOver';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { isNil } from 'lodash';
import UtilizedHooks from '@/Hooks/UtilizedHooks';

const market_data=[
    {
        id:1,
        market:"All",
        alias:"All"
    },
    {
        id:2,
        market:"MatchResult",
        alias:"1X2"
    },
    {
        id:3,
        market:"Over/Under",
        alias:"O/U"
    },
    {
        id:4,
        market:"DoubleChance",
        alias:"12"
    },
    {
        id:5,
        market:"TotalGoals",
        alias:"Goals"
    }
]

function GameScreen({requestGetGameDetails,socket}) {
    const route=useNavigate();
    const {placeBetRequest,getSingleGameDetails}=UtilizedHooks();
    const {tempSwarmData,getSingleGame,setGetGameDetailsParams,setSingleLiveGamesUpdateKey} = useContext(storeTempContext);
    const [gameDetails,setFoundGameDetails]=useState(null);
    const [searchParams,setSearchParams] = useSearchParams();
    const [activeMarket,setActiveMarket]=useState(searchParams.get("markt_type"));
    
    const [queryParams,setQueryParams]=useState({
        region_id:Number(searchParams.get("reg_id")),
        competition_id:Number(searchParams.get("compt_id")),
        game_id:Number(searchParams.get("game_id")),
        market_type:searchParams.get("markt_type")
    });

    /**
     * @var {Number} globalVar
     *  @var {Number} firstHalfUderOverKey
     */
    let globalVar=1;

    let firstHalfUderOverKey=1;

    const requestLiveGamesUpdate=()=>{
        if(!isNil(tempSwarmData)){
            requestGetGameDetails(queryParams);
            getSingleGameDetails(queryParams,socket);
        } 
    }

    const activeTabHandler=(arg)=>{
        setActiveMarket(arg);
        urlParamReplacer(arg);//add param filter to url
    };

    /**
     * @param {string} arg
     */
    const urlParamReplacer=(arg)=>{
        if(searchParams.has("markt_type")){
            searchParams.set("markt_type",arg);
            setSearchParams(searchParams);
        }
    };

    /**
     *
     * @param {*} obj
     * @param {string} specifier
     * @returns {Array<{}>}
     */
    const marketsCollectionExtracter=(obj,specifier)=>{
        /**
         * @type {Array<{}>}
         */
        const arr=[];
        if(obj&&specifier){
            Object.keys(obj.market).map((mktKey)=>{
                if(obj.market[mktKey].market_type===specifier){
                    arr.push(obj.market[mktKey]);
                }
            });
            return arr;
        }

        return arr;
    };



    useEffect(()=>{
        setQueryParams({...queryParams,
            region_id:Number(searchParams.get("reg_id")),
            competition_id:Number(searchParams.get("compt_id")),
            game_id:Number(searchParams.get("game_id")),
            market_type:searchParams.get("markt_type")
        });
    },[searchParams,setQueryParams]);


    useEffect(()=>{
        if(tempSwarmData){
            console.log("i have executed the get single games.......");
            getSingleGameDetails(queryParams,socket);
        }
    },[]);

    //handle refresh
    useEffect(() => {
        if (tempSwarmData && !getSingleGame) {
            getSingleGameDetails(queryParams,socket);
        }
        //get specific game details
        if (tempSwarmData&&getSingleGame) {
            const foundData =tempSwarmData?.data?.sport[1]?.region[queryParams?.region_id]?.competition[queryParams?.competition_id]?.game[queryParams?.game_id];

            const sport_name=tempSwarmData?.data?.sport[1]?.alias;
            const region_name=tempSwarmData?.data?.sport[1]?.region[queryParams?.region_id]?.alias;
            const compt_name=tempSwarmData?.data?.sport[1]?.region[queryParams?.region_id]?.competition[queryParams?.competition_id]?.name;
            const gameRoute=sport_name+"/"+region_name+"/"+compt_name;

            const _data={
                game:foundData,
                details:getSingleGame?.data?.game[queryParams?.game_id],
                gameRoute
            }
            setFoundGameDetails(_data);
        }
    }, [tempSwarmData, getSingleGame]);

    console.log(gameDetails, "this game details......");

    //text-[#03396c]

    return (
        <div className="flex flex-col flex-1 h-full">
            {!tempSwarmData && (
                <Skeleton
                    animation="wave"
                    variant="triangular"
                    height={40}
                    width={"100%"}
                />
            )}

            {gameDetails && (
                <header className="flex items-center font-poppins justify-between bg-gray-200 text-gray-600 text-opacity-60 h-[40px] px-2 space-x-1">
                    <div className="flex items-center">
                        <button
                            onClick={() => route("/?page=home")}
                            className="text-[18px] outline-none px-2"
                        >
                            <IoHome />
                        </button>
                        <div className="flex items-center text-[12px]">
                            <span>{gameDetails?.gameRoute}</span>
                        </div>
                    </div>
                    {gameDetails?.details?.info?.current_game_state !==
                        "notstarted" && (
                        <div>
                            <CountdownCircleTimer
                                isPlaying
                                size={25}
                                strokeWidth={2}
                                duration={10}
                                colors={[
                                    "#004777",
                                    "#F7B801",
                                    "#A30000",
                                    "#A30000",
                                ]}
                                colorsTime={[7, 5, 2, 0]}
                                onComplete={() => {
                                    // request update of live games
                                    // requestLiveGamesUpdate();

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
                    )}
                </header>
            )}

            {!getSingleGame && tempSwarmData && (
                <div className="flex items-center justify-center h-[400px]">
                    <ScaleLoader color="#0E76BC" size={20} />
                </div>
            )}

            {getSingleGame && tempSwarmData && (
                <section className="flex flex-col flex-1 px-2 pt-2 overflow-y-scroll">
                    {isNil(gameDetails?.details) && (
                        <div className="flex items-center justify-center h-[400px]">
                            <ScaleLoader color="#0E76BC" size={20} />
                        </div>
                    )}

                    {!isNil(gameDetails?.details) && (
                        <div className="mb-5 h-[400px] sm:h-full">
                            <div className="flex flex-col mx-2 my-1 font-poppins ">
                                <div className="flex items-center gap-2 text-[14px] font-medium">
                                    <span className="text-mediumYellowColor text-[13px]">
                                        {gameDetails?.details?.info?.score1}
                                    </span>
                                    <p className="text-[#03396c]">
                                        {gameDetails?.details?.team1_name}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-[#03396c] text-[14px] font-medium">
                                    <span className=" text-mediumYellowColor text-[13px]">
                                        {gameDetails?.details?.info?.score2}
                                    </span>
                                    <p className="">
                                        {gameDetails?.details?.team2_name}
                                    </p>
                                </div>
                                {gameDetails?.details?.info
                                    ?.current_game_state !== "notstarted" && (
                                    <div className="flex items-center justify-between text-[12px] my-2 gap-1 font-medium text-red-700">
                                        <div className="flex items-center gap-1">
                                            <span>
                                                <LuClock />
                                            </span>
                                            <span className="text-[13px]">
                                                {
                                                    gameDetails?.details?.info
                                                        ?.current_game_time
                                                }
                                                '(Live)
                                            </span>
                                        </div>
                                        <div className="text-mediumYellowColor">
                                            {gameDetails?.details?.info
                                                ?.current_game_state ===
                                                "set1" && (
                                                <span>{"1-Half"}</span>
                                            )}
                                            {gameDetails?.details?.info
                                                ?.current_game_state ===
                                                "set2" && (
                                                <span>{"2-Half"}</span>
                                            )}
                                            {gameDetails?.details?.info
                                                ?.current_game_state !==
                                                "set2" &&
                                                gameDetails?.details?.info
                                                    ?.current_game_state !==
                                                    "set1" && (
                                                    <span>
                                                        {
                                                            gameDetails?.details
                                                                ?.info
                                                                ?.current_game_state
                                                        }
                                                    </span>
                                                )}
                                        </div>
                                    </div>
                                )}

                                {gameDetails?.details?.info
                                    ?.current_game_state === "notstarted" && (
                                    <span className="text-[11px] text-[#5c5c5c] capitalize">
                                        {
                                            gameDetails?.details?.info
                                                ?.current_game_state
                                        }
                                    </span>
                                )}

                                <div className="flex items-center justify-end">
                                    <div className="flex items-center gap-1 text-[12px] text-primaryColor hover:underline cursor-pointer">
                                        <span>
                                            <IoIosStats />
                                        </span>
                                        <p>Stats</p>
                                    </div>
                                </div>
                            </div>
                            {/* market naviagtion list */}
                            <div className="flex items-center gap-2 text-[11px] font-poppins ">
                                <div className="flex mx-2 items-center justify-between w-[100%] px-1 gap-2">
                                    {market_data.map((marketObj, index) => (
                                        <div
                                            onClick={() =>
                                                activeTabHandler(
                                                    marketObj?.alias
                                                )
                                            }
                                            className={`cursor-pointer text-center basis-1/3 p-2.5 border-b-2 border-b-transparent  text-[13px] ${
                                                marketObj?.alias == activeMarket
                                                    ? " border-b-gray-800 text-gray-700"
                                                    : " text-gray-500"
                                            } `}
                                            key={marketObj?.id}
                                        >
                                            <span>{marketObj?.alias}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* differennt markets render */}
                            <div className="flex flex-col gap-2 mx-2 mt-5">
                                {gameDetails?.details && (
                                    <>
                                        {Object.keys(
                                            gameDetails?.details?.market
                                        ).map((_marketKey) => {
                                            const _mktObject =
                                                gameDetails?.details?.market[
                                                    _marketKey
                                                ];
                                            const { name, type } = _mktObject; //extracting the market fields
                                            const { info, market, ...rest } =
                                                gameDetails?.details;

                                            if (
                                                _mktObject?.market_type ===
                                                "MatchResult"
                                            ) {
                                                return (
                                                    <MatchResultsComponent
                                                        events={
                                                            _mktObject?.event
                                                        }
                                                        game_infor={{ ...rest }}
                                                        event_infor={{
                                                            market_name: name,
                                                            market_id:
                                                                _marketKey,
                                                            market_type: type,
                                                        }}
                                                        key={_marketKey}
                                                    />
                                                );
                                            } else if (
                                                _mktObject?.market_type ===
                                                "DoubleChance"
                                            ) {
                                                return (
                                                    <DoubleChanceComponent
                                                        events={
                                                            _mktObject?.event
                                                        }
                                                        game_infor={{ ...rest }}
                                                        event_infor={{
                                                            market_name: name,
                                                            market_id:
                                                                _marketKey,
                                                            market_type: type,
                                                        }}
                                                        key={_marketKey}
                                                    />
                                                );
                                            } else if (
                                                _mktObject?.market_type ===
                                                "BothTeamsToScore"
                                            ) {
                                                return (
                                                    <BothTeamsToScoreComponent
                                                        events={
                                                            _mktObject?.event
                                                        }
                                                        game_infor={{ ...rest }}
                                                        event_infor={{
                                                            market_name: name,
                                                            market_id:
                                                                _marketKey,
                                                            market_type: type,
                                                        }}
                                                        key={_marketKey}
                                                    />
                                                );
                                            } else if (
                                                _mktObject?.market_type ===
                                                    "HalfTimeOverUnder" &&
                                                firstHalfUderOverKey == 1
                                            ) {
                                                firstHalfUderOverKey += 1;
                                                /**
                                                 * @type {Array<{}>}
                                                 */
                                                const overUnderCollection =
                                                    marketsCollectionExtracter(
                                                        gameDetails?.details,
                                                        "HalfTimeOverUnder"
                                                    );
                                                console.log(
                                                    overUnderCollection,
                                                    "the half time bet......"
                                                );
                                                return (
                                                    <HalfTimeUnderOver
                                                        eventsArr={
                                                            overUnderCollection
                                                        }
                                                        game_infor={{
                                                            market_type: type,
                                                            ...rest,
                                                        }}
                                                        key={_marketKey}
                                                    />
                                                );
                                            } else if (
                                                _mktObject?.market_type ===
                                                    "OverUnder" &&
                                                globalVar == 1
                                            ) {
                                                globalVar += 1;
                                                /**
                                                 * @type {Array<{}>}
                                                 */
                                                const overUnderCollection =
                                                    marketsCollectionExtracter(
                                                        gameDetails?.details,
                                                        "OverUnder"
                                                    );

                                                return (
                                                    <OverUndersComponent
                                                        eventsArr={
                                                            overUnderCollection
                                                        }
                                                        game_infor={{
                                                            market_type: type,
                                                            ...rest,
                                                        }}
                                                        key={_marketKey}
                                                    />
                                                );
                                            }
                                        })}
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    {/* footer section */}
                    {/* <CastleBetFooter /> */}
                </section>
            )}
        </div>
    );
}

export default GameScreen;
