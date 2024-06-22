import React,{useState,useEffect,useContext}  from 'react';
import CastleBetFooter from '@/Components/CastleBetFooter';
import { SwarmDataContext } from '@/Context/SwarmDataContext';
import FetchedSoccerSportDisplay from '@/Components/CastleSitePartials/FetchedSoccerSportDisplay';
import { Carousel } from "flowbite-react";
import {ad01,ad02,ad03,ad04,ad05} from '@/assets/ads/index';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { GiBurningRoundShot } from "react-icons/gi";
import { IoFootball } from "react-icons/io5";
import DashboardDefaultScreen from '@/Layouts/CastleBetLayouts/dashboardDefault/DashboardDefaultScreen';
import { Skeleton } from '@mui/material';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { isNil } from 'lodash';

/**
 * @type {Array<{
 *  id:number,
 *  icon:Element,
 *  title:string
 * }>}
 */
const homeNav=[
    {
        id:1,
        icon:<FaRegCalendarAlt/>,
        title:"All"
    },
    {
        id:2,
        icon:<FaRegCalendarAlt/>,
        title:"Today"
    },
    {
        id:3,
        icon:<IoFootball/>,
        title:"hlights"
    },
    {
        id:4,
        icon:<GiBurningRoundShot/>,
        title:"Popular"
    },
    {
        id:5,
        icon:<FaTrophy/>,
        title:"Top"
    },
]

function Welcome() {
    const {tempSwarmData}=useContext(storeTempContext);
    return (
        <div className="flex flex-col flex-1 w-full h-full overflow-y-scroll mainHome-content ">
             {isNil(tempSwarmData) &&(
                <Skeleton width={"100%"} height={140} sx={{ bgcolor: '#dbdbdb' }} animation="wave" variant='rectangular' /> 
             )}

             {!isNil(tempSwarmData) &&(
                <header className="w-full">
                    <div className="h-[10rem] w-screen sm:h-[12rem] xl:h-[14rem] 2xl:h-[16rem] px-1 py-1 bg-gray-900 sm:bg-white">
                        <Carousel slideInterval={5000}>
                            <img src={ad01} className="h-full " />
                            <img src={ad02} className="h-full " />
                            <img src={ad03} className="h-full " />
                            <img src={ad04} className="h-full " />
                            <img src={ad05} className="h-full " />
                        </Carousel>
                    </div>
                </header>
             )}

            
            <section className="">
                <div className="mb-4">
                    <div className={`flex items-center justify-center py-2 pt-3 mb-4 ${tempSwarmData?'bg-gray-900':''}  sm:bg-white`}>
                        <div className="flex items-center gap-2 px-2 w-screen sm:w-[50%] justify-between">
                            {homeNav.map((el) => (
                                <>
                                    {isNil(tempSwarmData) &&(
                                        <Skeleton width={40} height={40} animation="wave" variant='circular' /> 
                                    )}
                                    {!isNil(tempSwarmData) &&(
                                        <button className="flex items-center active:scale-95 text-[#03396c] sm:bg-white  border-gray-500 gap-1 text-[11px] w-[80px] h-[30px] bg-gray-300 rounded-full border-[1px] justify-center">
                                            <span>{el?.icon}</span>
                                            <p>{el?.title}</p>
                                        </button>
                                    )}    
                                </>
                            ))}
                        </div>
                    </div>

                    {/* TODO::perform the data filter based on selection */}
                    {/* default display */}
                    {/* 
                        1. 3 popular games
                        2. 3 boosted odds games
                        4. 4 live games 
                    
                    */}

                    {/* default show screen */}
                    <DashboardDefaultScreen />

                    {/* today */}

                    {/* outlights */}

                    {/* popular  */}

                    {/* top competions */}

                    {/* All fetched socer sport games falls here */}
                    {/* <FetchedSoccerSportDisplay fetchedData={storeSwarmData} /> */}
                </div>
                {/* footer at bottom */}
                <CastleBetFooter />
            </section>
        </div>
    );
}

export default Welcome;
