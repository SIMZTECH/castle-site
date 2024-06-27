
import React from 'react';
import { topCompetitionKeyData } from '@/assets/store/GameFile';
import HeaderComponent from './HeaderComponent';
import { useContext } from 'react';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { useState } from 'react';
import { isNil } from 'lodash';
import { useEffect } from 'react';
import { liveGames,boosts } from '@/assets/icons';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';


const DEFAULT_VEIWABLE_COMPETITIONS=4;//regions you will see at load time

const fixedAsideNavEventsData=[
    {
        id:1,//identifier
        title:"Live",
        path:"/?page=league&reg_id=all&compt_id=all&filter=live",
        icon:liveGames
    },
    {
        id:2,//identifier
        title:"Boosted",
        path:"/?page=league&reg_id=all&compt_id=all&filter=boosted",
        icon:boosts
    },
]
function PopularCompetitionList() {
    const route=useNavigate();
    const {tempSwarmData,getBoostedGames,liveGames,setGetCompAndRegParams}=useContext(storeTempContext);
    const [availableCompetitions,setAvailableCompetition]=useState(null);
    const [filterKey,setFilterKey]=useState(DEFAULT_VEIWABLE_COMPETITIONS);
    const [totalLiveGames,setTotalLiveGames]=useState(0);
    const [totalBoostedGames,setTotalBoostedGames]=useState(0);

     /**
     * 
     * @param {[]} arg 
     * @returns {number}
     */

     const getArrayLength=(arg)=>{
        let LENGTH=0;
        Object.keys(arg).map((comptKey)=>{
            LENGTH+=1;
        });

        return LENGTH;
    };

    /**
     * 
     * @param {{
    * compt_id:number,
    * reg_id:number
    * }} arg 
    */
   const handleGetParamsFromCallBack=(arg)=>{
       setGetCompAndRegParams(arg);
   };

    /**
     * 
     * @param {Array<{}>} arg 
     * @return {number}
     */
    const getTotalGamesCount=(arg)=>{
        /**
         * @type {number}
         */
        let total=0;
        if(arg){
            Object.keys(arg?.sport).map((sportKey)=>{
                const sportObj=arg?.sport[sportKey];
                Object.keys(sportObj?.region).map((regionKey)=>{
                    const regionObj = sportObj?.region[regionKey];
                    Object.keys(regionObj?.competition).map((comptKey)=>{
                        const comptObj=regionObj?.competition[comptKey];
                        // use the get length array
                        total+=getArrayLength(comptObj.game);
                    })
                });
            });
        }

        return total;
    };

    /**
     * 
     * @returns {Array<{}>}
     */
    const filterAvailableCompetitions=()=>{
        /**
         * @type {number}
         */
        const order_rank=0;
        /**
         * @type {Array<{
         *  compt_id:number,
         *  compt_name:string,
         *  game_count:number,
         *  order:number,
         *  logo:string,
         *  reg_alias:string,
         *  reg_id:number
         * }>}
         */
        const arr=[];

        if(tempSwarmData&&topCompetitionKeyData){

            Object.keys(tempSwarmData?.data?.sport).map((sportKey)=>{
                const sportObj=tempSwarmData?.data?.sport[sportKey];

                Object.keys(sportObj?.region).map((regionKey)=>{
                    const regionObj=sportObj?.region[regionKey];

                    Object.keys(regionObj.competition).map((comptKey)=>{
                        const comptObj=regionObj.competition[comptKey];

                        const game_count=getArrayLength(comptObj?.game);

                        const foundCompt=topCompetitionKeyData.find((comp)=>comp?.compt_name===comptObj?.name);
                        if(!isNil(foundCompt)){
                            //perform the ordering of an array
                            /**
                             * LOGIC
                             * 1 log=1
                             * 2. log>come
                             * 
                             * 
                             */
                            const {...rest}=foundCompt;
                            arr.push({
                                reg_id:regionObj?.id,
                                reg_alias:regionObj?.alias,
                                game_count:game_count,
                                order:comptObj?.favorite_order,
                                ...rest
                            });
                        }
                    });   
                });
            });
        }

        return arr.sort(function(a,b){
            return a?.order-b?.order
        });
    };

    const showMoreOrLessRegions=()=>{
        const len=filterAvailableCompetitions().length;

        if(len>filterKey){
            const remain=len-DEFAULT_VEIWABLE_COMPETITIONS;
            setFilterKey(DEFAULT_VEIWABLE_COMPETITIONS+remain);
        }else{
            setFilterKey(DEFAULT_VEIWABLE_COMPETITIONS);
        }
    };

    /**
     * 
     * @param {{
     * compt_id:any,
     * reg_id:any
     * }} arg 
     */
    const asideRouteToHandler=(arg)=>{
        const {compt_id,reg_id}=arg;
        route(`/?page=league&reg_id=${Number(reg_id)}&compt_id=${Number(compt_id)}&filter=all`);
    };

    useEffect(()=>{
        if(liveGames){
            //TODO::for live games
            setTotalLiveGames(getTotalGamesCount(liveGames)); 
        }

        if(getBoostedGames){
            //TODO::for boosted games
            setTotalBoostedGames(getTotalGamesCount(getBoostedGames));
        }

    //     console.log(totalLiveGames,"total live games.......");
    // console.log(totalBoostedGames,"total boosted games.........");
    },[getBoostedGames,liveGames]);


    useEffect(()=>{
        if(tempSwarmData){
            setAvailableCompetition(filterAvailableCompetitions().slice(0,filterKey));
        }
    },[tempSwarmData,filterKey]);

    // console.log(availableCompetitions,"the collection available in popular competitions...........");
    


    return (
        <div>
            <HeaderComponent title={"Popular"} />
            <div className="w-full gap-1 pt-3 pb-3">
                {/* Fixed popular 1. Live games and boosted */}
                {fixedAsideNavEventsData && availableCompetitions && (
                    <>
                        {fixedAsideNavEventsData.map((fixedNav) => (
                            <Link
                                to={fixedNav?.path}
                                key={fixedNav?.id}
                            >
                                <div className="border-[1px] justify-between cursor-pointer px-2 h-[30px] flex items-center active:scale-95 rounded-sm shadow-sm hover:bg-[#b3cde0] text-[#03396c] mb-2">
                                    <div className="flex items-center gap-1">
                                        <figure className="w-[25px] h-[25px] rounded-full p-1">
                                            <img
                                                src={fixedNav?.icon}
                                                alt="logo"
                                                className="w-full h-full rounded-full"
                                            />
                                        </figure>
                                        <span className="text-[13px]">
                                            {fixedNav?.title}
                                        </span>
                                    </div>
                                    {/* dynamic display of the live events */}
                                    {fixedNav?.title === "Live" && (
                                        <span className="text-[12px] font-medium">
                                            {totalLiveGames}
                                        </span>
                                    )}
                                    {fixedNav?.title === "Boosted" && (
                                        <span className="text-[12px] font-medium ">
                                            {totalBoostedGames}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </>
                )}
                {/* list of available popular competitions dynamic data from swarm */}
                {availableCompetitions && (
                    <>
                        {Object.keys(availableCompetitions).map((popularComptKey, index) => {
                                const popularComptObj=availableCompetitions[popularComptKey];
                                const {...rest }=availableCompetitions[popularComptKey];
                                return (
                                    <button
                                        key={popularComptKey}
                                        onClick={()=>{
                                            asideRouteToHandler({...rest});//navigate to route
                                            handleGetParamsFromCallBack({...rest});
                                            // onSelectedFilterHandler({...rest});//invock get games by competition
                                        }}
                                        className="border-[1px] w-full outline-none justify-between cursor-pointer px-2 h-[30px] flex items-center active:scale-95 rounded-sm shadow-sm hover:bg-[#b3cde0] text-[#03396c] mb-2"
                                    >
                                        <div className="flex items-center gap-1">
                                            <figure className="w-[25px] h-[25px] rounded-full p-1">
                                                <img
                                                    src={popularComptObj?.logo}
                                                    alt="logo"
                                                    className="w-full h-full rounded-full"
                                                />
                                            </figure>
                                            <span className="text-[13px]">
                                                {popularComptObj?.compt_name}
                                            </span>
                                        </div>
                                        <span className="text-[12px]">
                                            {popularComptObj?.game_count}
                                        </span>
                                    </button>
                                );
                            }
                        )}
                    </>
                )}
            </div>
            {/* show more or less buttons */}
            <div
                onClick={() => showMoreOrLessRegions()}
                className="w-full pb-1 text-primaryColor font-poppins text-[13px] gap-3 flex justify-center items-center cursor-pointer border-b-[1px]"
            >
                <p>
                    {filterAvailableCompetitions().length == filterKey
                        ? `Show less`
                        : `Show more`}
                </p>
                <span>
                    {filterAvailableCompetitions().length == filterKey ? (
                        <TfiAngleUp />
                    ) : (
                        <TfiAngleDown />
                    )}
                </span>
            </div>
        </div>
    );
}

export default PopularCompetitionList;
