
import React from 'react';
import BoostedGameComponent from './BoostedGameComponent';


function BoostedGameCompetitionComponent({fetchedComptetitionData,allData,sport_id,region_id,competition_id}) {
  return (
    <div>
        <div>{fetchedComptetitionData?.name}</div>
        {/* here fall the games */}
        <div>
            {Object.keys(fetchedComptetitionData?.game).map((gameKey)=>(
                <BoostedGameComponent
                    key={gameKey}
                    fetchedGameData={fetchedComptetitionData?.game[gameKey]}
                    allData={allData}
                    sport_id={sport_id}
                    region_id={region_id}
                    game_id={gameKey}
                    competition_id={competition_id}
                />
            ))}
        </div>
    </div>
  )
}

export default BoostedGameCompetitionComponent;
