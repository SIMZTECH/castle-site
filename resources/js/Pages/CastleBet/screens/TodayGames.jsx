import { storeTempContext } from '@/Context/DataStoreTemp';
import { Skeleton } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { BiFootball } from 'react-icons/bi';
import { ScaleLoader } from 'react-spinners';
import BoostedGameSportComponent from './boostedGameComp/BoostedGameSportComponent';

function TodayGames({onRefreshRequestUpdate}) {
    const {tempSwarmData,getTodayGames} = useContext(storeTempContext);


    useEffect(()=>{
        if(tempSwarmData){
            // TODO::pass in the required params
            onRefreshRequestUpdate();
        }
    },[tempSwarmData])






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
                <header className="flex items-center  gap-1 h-[40px] bg-whiteSmoke border-b-[1px] px-3">
                    <span>
                        <BiFootball />
                    </span>
                    <p> Today Games</p>
                </header>
            )}
            <section className="flex-1 px-4 pt-5 overflow-y-scroll mainHome-content">
                <div className="h-[600px]">
                    {/* show loader when fetching today games */}
                    {/* NOTE::i have reused the component for another sector */}
                    {getTodayGames && (
                        <>
                            {Object.keys(getTodayGames?.sport).map(
                                (sportKey) => (
                                    <BoostedGameSportComponent
                                     allData={getTodayGames?.sport}
                                     sport_id={sportKey}
                                     key={sportKey}
                                     sportData={getTodayGames?.sport[sportKey]}
                                    />
                                )
                            )}
                        </>
                    )}


                    {!getTodayGames && tempSwarmData && (
                        <div className="flex items-center justify-center">
                            <ScaleLoader color="#0E76BC" size={20} />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default TodayGames
