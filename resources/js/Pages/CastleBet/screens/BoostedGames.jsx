
import SoccerSportComponent from '@/Components/CastleSitePartials/SoccerSportComponent';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { Skeleton } from '@mui/material';
import React, { useContext, useMemo, useState } from 'react';
import { FaFireFlameCurved } from 'react-icons/fa6';
import { ScaleLoader } from 'react-spinners';
import BoostedGameSportComponent from './boostedGameComp/BoostedGameSportComponent';
import { isNil } from 'lodash';

function BoostedGames() {
    const {tempSwarmData,getBoostedGames} = useContext(storeTempContext);
    const [recievedBoostedGames,setRecievedBoostedGames] = useState(null);

    useMemo(()=>{
        if(!isNil(getBoostedGames.sport[1].region)){
            setRecievedBoostedGames(getBoostedGames);
        }else{
            setRecievedBoostedGames(null);
        }
    },[getBoostedGames]);


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
                    {!isNil(recievedBoostedGames) && (
                        <>
                            {Object.keys(recievedBoostedGames?.sport).map(
                                (sportKey) => (
                                    <BoostedGameSportComponent
                                     allData={recievedBoostedGames?.sport}
                                     sport_id={sportKey}
                                     key={sportKey}
                                     sportData={recievedBoostedGames?.sport[sportKey]}
                                    />
                                )
                            )}
                        </>
                    )}

                    {isNil(recievedBoostedGames)&& (
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
