
import SoccerSportComponent from '@/Components/CastleSitePartials/SoccerSportComponent';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { Skeleton } from '@mui/material';
import React, { useContext } from 'react';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { ScaleLoader } from 'react-spinners';
import BoostedGameSportComponent from './boostedGameComp/BoostedGameSportComponent';
import { useEffect } from 'react';
import { isNil } from 'lodash';

function BoostedGames({onRefreshRequestUpdate}) {
    const {tempSwarmData,getBoostedGames} = useContext(storeTempContext);

    // TODO::implement get boosted games by querying swarm

    // TODO::on refresh request the games again
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
                        <FaFireFlameCurved />
                    </span>
                    <p> Boosted Odds</p>
                </header>
            )}
            <section className="flex-1 px-4 pt-5 overflow-y-scroll mainHome-content">
                <div className="h-[600px]">
                    {/* show loader when fetching boosted games */}
                    {!isNil(getBoostedGames?.sport) && (
                        <>
                            {Object.keys(getBoostedGames?.sport).map(
                                (sportKey) => (
                                    <BoostedGameSportComponent
                                     allData={getBoostedGames?.sport}
                                     sport_id={sportKey}
                                     key={sportKey}
                                     sportData={getBoostedGames?.sport[sportKey]}
                                    />
                                )
                            )}
                        </>
                    )}

                    {isNil(getBoostedGames?.sport) && tempSwarmData && (
                        <div className="flex items-center justify-center">
                            <ScaleLoader color="#0E76BC" size={20} />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default BoostedGames;
