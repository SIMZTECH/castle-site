import React from 'react'

function OddsButton({type,price,isHighlight,market_id,callBack}) {

    const getClassName=()=>{
        const baseClass = `${isHighlight?'selectedGameHighlight':'bg-primaryColor'} basis-[33%] px-2 py-2 flex items-center justify-between cursor-pointer text-white font-medium text-[15px]`;
        return baseClass;
    };


    return (
        <div
            onClick={()=>callBack(market_id,price,type)} 
            className={getClassName()}>
            <span>{type}</span>
            <span>{price}</span>
        </div>
    )
}

export default OddsButton