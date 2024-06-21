import React from 'react'
import ClipLoader  from 'react-spinners/ClipLoader';

function LogoutOutLoader({isOpen,onClose,response}) {

  return (
    <div
        onClick={()=>onClose(false)}
        className={`bg-[#000000a1] ${isOpen?'flex':'hidden'} items-center justify-center absolute h-full w-full z-20 p-4`}
    >
        <div className='text-[22px] text-primaryColor'><ClipLoader size={36} color='white'/></div>
    </div>
  )
}

export default LogoutOutLoader
