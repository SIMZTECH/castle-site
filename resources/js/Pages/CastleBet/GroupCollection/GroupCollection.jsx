import React from 'react';

// NOTE:params comes as an array collection
function GroupCollection({params,fetchedData}){
    const {sport_id,region_id,competition_id,market_type} = params;

    // TODO::Socket implementation


  return (
    <div>
        <span>competition id:{competition_id}</span>
        
       
        GroupCollection

    </div>
  )
}

export default GroupCollection;