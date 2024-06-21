import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";

function EventComponent({isHighLighted,onSelectedCallBack,name,price,isStrongTeam}) {
  return (
    <div
      className={`flex font-poppins text-[13px] basis-[50%] h-[35px] items-center select-none border-[#777777] text-black font-medium border-opacity-50 bg-white border ${name == '1' ? 'border-r-0' : ''} ${name == 'X' ? 'border-r-0' : ''}`}
      onClick={() => onSelectedCallBack()}
    >
      <p className={`w-[45px] text-[12px] justify-center h-full flex items-center ${isHighLighted?'bg-primaryColor bg-opacity-70 text-white ':' bg-[#777777] bg-opacity-30'}`}>{name}</p>
      <p className={`flex items-center justify-around flex-1 w-full h-full cursor-pointer ${isHighLighted?'bg-primaryColor text-white':''}`}>
        {isStrongTeam && (
          <span className='text-[13px] text-[#FFD700]'><AiFillThunderbolt /></span>
        )}
        {price}
      </p>
    </div>
  )
}

export default EventComponent
