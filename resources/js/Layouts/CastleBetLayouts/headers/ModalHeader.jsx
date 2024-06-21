import React from 'react';
import { IoMdClose } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { Link } from '@inertiajs/react';

function ModalHeader({title,modalName}) {

    const showBetslipHandler=()=>{
        const betSlip = document.getElementById("betSlip");
        betSlip.classList.remove("showBetSlip");
    };

  return (
    <header className='flex items-center justify-between px-4 w-full h-[45px] text-white bg-primaryColor font-poppins fixed'>
        <div className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-light b'><CgNotes/></span>
            <p className='font-light tracking-wider text-[12px] b'>{title}</p>
        </div>
          <div className='flex items-center gap-2'>
              <div className='font-light tracking-wider text-[12px] flex gap-1 b'>
                  <Link className='cursor-pointer hover:underline b'>Login</Link>
                  <span>or</span>
                  <Link className='cursor-pointer hover:underline b'>Register</Link>
              </div>
              {/* close btn */}
              <div
                onClick={()=>showBetslipHandler()}
                className='font-medium b
                text-[20px] w-[25px] h-[20px] active:scale-95
                flex items-center justify-center
                cursor-pointer'>
                <IoMdClose />
             </div>
          </div>
    </header>
  )
}

export default ModalHeader;
