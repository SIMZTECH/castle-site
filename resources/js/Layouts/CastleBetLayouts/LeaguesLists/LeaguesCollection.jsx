import React,{useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import DisplayGames from './DisplayGames';


function LeaguesCollection({fetchedData,gameDetails}){

    return (
        <div className='flex flex-wrap gap-1 py-2 mx-3'>
            {fetchedData && gameDetails && (
                <DisplayGames
                    gameDetails={gameDetails} 
                    dataObject={fetchedData}/>
            )}
            
            {/* alternative */}
            {!fetchedData && (
                <div className='flex items-center justify-center w-full'>
                    <span className='b text-primaryColor'>
                        <ScaleLoader
                            size={18}
                            color='#0E76BC'
                        />
                    </span>
                </div>
            )}
        </div>
    )
}

export default LeaguesCollection;