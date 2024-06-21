import React from 'react';
import GameCard from './GameCard';


function CompetitionComponent({competition_id,gamesData,allFetchedData,sport_id,region_id}){
    return (
        <>
         {Object.keys(gamesData).map((keys,index)=>(
            <GameCard
              game={gamesData[keys]} 
              game_id={gamesData[keys].id}
              allFetchedData={allFetchedData}
              competition_id={competition_id}
              region_id={region_id}
              sport_id={sport_id}
              key={index}
            />
         ))}
        </>
    )
}

export default CompetitionComponent;