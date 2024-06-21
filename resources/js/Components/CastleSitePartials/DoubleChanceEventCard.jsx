import React from 'react';

function DoubleChanceEventCard({market_type,price,isHighlighted,callBackHandler}) {
  return (
    <div
        onClick={()=>callBackHandler()}
        className='flex items-center w-full cursor-pointer'>
        <div className={`h-[30px] w-[30px] flex items-center justify-center ${isHighlighted?'bg-primaryColor bg-opacity-70 text-white':'bg-[#ccc]'}`}>
            {market_type}
        </div>
        <p className={`flex items-center justify-center h-[30px] flex-1 ${isHighlighted?'bg-primaryColor text-white':'bg-white'}`}>{price}</p>
    </div>
  )
}

export default DoubleChanceEventCard;
