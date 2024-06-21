import React from 'react';
import SoccerSportComponent from './SoccerSportComponent';
import ScaleLoader from 'react-spinners/ScaleLoader';

function FetchedSoccerSportDisplay({fetchedData}){

  return (
      <main>
          {/* data fetched successfully */}
          {fetchedData && (
              <>
                  {Object.keys(fetchedData?.data?.sport).map((keys, index) => (
                      <SoccerSportComponent
                          regionData={fetchedData?.data?.sport[keys].region}
                          allFetchedData={fetchedData?.data?.sport}
                          sport_id={keys}
                          key={index}
                      />
                  ))}
              </>
          )}
      </main>
  )
}

export default FetchedSoccerSportDisplay
