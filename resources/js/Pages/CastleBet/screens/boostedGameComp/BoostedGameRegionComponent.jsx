
import React from 'react';
import BoostedGameCompetitionComponent from './BoostedGameCompetitionComponent';

function BoostedGameRegionComponent({
    fetchedRegionData,
    allData,
    sport_id,
    region_id,
}) {

    // TODO::implement the logic to sort the competition data by popular_order



    return (
        <main>
            {Object.keys(fetchedRegionData?.competition).map((comptKey) => (
                <BoostedGameCompetitionComponent
                    key={comptKey}
                    allData={allData}
                    sport_id={sport_id}
                    region_id={region_id}
                    competition_id={comptKey}
                    fetchedComptetitionData={
                        fetchedRegionData?.competition[comptKey]
                    }
                />
            ))}
        </main>
    );
}

export default BoostedGameRegionComponent;
