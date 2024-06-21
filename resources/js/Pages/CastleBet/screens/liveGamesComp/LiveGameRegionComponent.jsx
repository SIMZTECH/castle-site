
import React from 'react';
import LiveGameCompetitionComponent from './LiveGameCompetitionComponent';

function LiveGameRegionComponent({
    fetchedRegionData,
    allData,
    sport_id,
    region_id,
}) {
    return (
        <main>
            {Object.keys(fetchedRegionData?.competition).map((comptKey) => (
                <LiveGameCompetitionComponent
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

export default LiveGameRegionComponent;
