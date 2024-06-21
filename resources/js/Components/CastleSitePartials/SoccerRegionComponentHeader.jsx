import React from 'react';
import { football } from '@/assets/icons';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";



function SoccerRegionComponentHeader({route,activeCallBackHandler,isActiveState}){


  return (
      <div className='text-[12px] bg-[#333333] rounded-sm shadow-sm py-2 px-2 font-poppins text-[#5c5c5c] flex items-center justify-between  select-none'>
          <div className='flex items-center gap-2'>
              <figure className='w-[15px] h-[15px] rounded-full flex items-center justify-center'>
                  <img src={football} alt='icon' className='w-full h-full' />
              </figure>
              <span className='text-white uppercase'>{route}</span>
          </div>
          {/* button drop down */}
          <button
            onClick={()=>activeCallBackHandler(isActiveState)}
            className='w-[30px] h-[30px] rounded-full cursor-pointer shadow-authButtonLayout
            flex items-center justify-center bg-primaryColor active:scale-95
            font-poppins text-white text-[18px] bg-opacity-60 hover:bg-opacity-100'>
            {isActiveState?<MdOutlineKeyboardDoubleArrowUp/>:< MdOutlineKeyboardDoubleArrowDown />}
          </button>
      </div>
  )
}

export default SoccerRegionComponentHeader
