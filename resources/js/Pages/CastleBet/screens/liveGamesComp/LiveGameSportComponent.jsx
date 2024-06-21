import React from 'react';
import LiveGameRegionComponent from './LiveGameRegionComponent';
import CastleBetFooter from '@/Components/CastleBetFooter';

function LiveGameSportComponent({sportData,allData,sport_id}) {
  return (
      <div>
          {Object.keys(sportData?.region).map((regionKey) => (
              <LiveGameRegionComponent
                  key={regionKey}
                  allData={allData}
                  sport_id={sport_id}
                  region_id={regionKey}
                  fetchedRegionData={sportData?.region[regionKey]}
              />
          ))}

          {/* footer */}
          <div className='mt-8'>
              <CastleBetFooter />
          </div>
      </div>
  );
}

export default LiveGameSportComponent
