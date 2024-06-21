import React from 'react';

function OverUnderEventCard({market_type,price,isHighlighted,callBackHandler,marketBase}) {
  return (
    <div
        onClick={()=>callBackHandler()}
        className='flex items-center cursor-pointer text-[11px] font-poppins'>
        <div className={`h-[30px] w-[40px] flex items-center justify-center ${isHighlighted?'bg-primaryColor bg-opacity-70 text-white':'bg-[#ccc]'}`}>
            {market_type[0]}{" "}{`(${marketBase})`}
        </div>
        <p className={`flex items-center justify-center h-[30px] flex-1 ${isHighlighted?'bg-primaryColor text-white':'bg-white'}`}>{price}</p>
    </div>
  )
}

export default OverUnderEventCard;
