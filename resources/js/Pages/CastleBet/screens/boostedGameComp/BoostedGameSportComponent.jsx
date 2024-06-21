import React from 'react';
import LiveGameRegionComponent from './BoostedGameRegionComponent';
import CastleBetFooter from '@/Components/CastleBetFooter';
import BoostedGameRegionComponent from './BoostedGameRegionComponent';

function BoostedGameSportComponent
({sportData,allData,sport_id}) {
  return (
      <div>
          {Object.keys(sportData?.region).map((regionKey) => (
              <BoostedGameRegionComponent
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

export default BoostedGameSportComponent
;
