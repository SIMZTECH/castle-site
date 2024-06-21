import React from 'react';
import SoccerRegionComponentHeader from './SoccerRegionComponentHeader';
import CompetitionComponent from './CompetitionComponent';
import { sortedIndexOf } from 'lodash';

function SoccerRegionComponent({competitionData,sport_id,region_id,allFetchedData}) {
    const [isActive,setIsActive]=React.useState(false);

    const sport_name=allFetchedData[sport_id].alias;
    const region_name=allFetchedData[sport_id].region[region_id].alias;
    const route=sport_name+"/"+region_name;


    return (
        // this will contain the games for that region
        <div className='border-[1px] border-gray-300'>
            <SoccerRegionComponentHeader
                isActiveState={isActive}
                activeCallBackHandler={((state)=>setIsActive(!state))}
                route={route}
            />
            {isActive && (
                <div className='px-2 pb-2'>
                    {Object.keys(competitionData).map((keys, index) => (
                        <CompetitionComponent
                            competition_id={keys}
                            gamesData={competitionData[keys].game}
                            sport_id={sport_id}
                            region_id={region_id}
                            allFetchedData={allFetchedData}
                            key={index}
                        />
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default SoccerRegionComponent
