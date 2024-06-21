import React from 'react';
import SoccerRegionComponent from './SoccerRegionComponent';

function SoccerSportComponent({regionData,sport_id,allFetchedData}) {
    return (
        <section className='flex flex-col gap-1 px-1 py-1'>
            {Object.keys(regionData).map((keys,index) => (
                <SoccerRegionComponent
                    competitionData={regionData[keys].competition}
                    sport_id={sport_id}
                    allFetchedData={allFetchedData}
                    region_id={keys}
                    key={index}
                />
            ))}
        </section>
    )
}

export default SoccerSportComponent
