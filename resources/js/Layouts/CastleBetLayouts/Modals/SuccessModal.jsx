import React, { useEffect, useReducer, useRef } from 'react';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";
import { FadeLoader } from 'react-spinners';

function SuccessModal({isOpen,onclose,response,buttonCallBack}) {
    // TODO::implement the clear and keep slip logic

    const modalRef=useRef(null);

    useEffect(()=>{

        if(isOpen){
            modalRef.current.classList.remove("hidden");
        }else{
            modalRef.current.classList.add("hidden");
        }
    },[isOpen]);

  return (
      <div
          ref={modalRef}
          className="absolute top-0 bottom-0 w-full h-full bg-[#00000078] z-30 font-poppins"
      >
          <main
              onClick={() => onclose(false)}
              className="flex items-center justify-center w-full h-full p-8"
          >
              <section className="w-[90%] flex flex-col items-center border-[2px] border-gray-200 bg-white rounded-md shadow-popup p-1 px-1">
                <header className="flex items-center justify-end w-full px-3 py-1">
                      <button
                          onClick={() => onclose(false)}
                          className="text-[18px] text-primaryColor"
                      >
                          <IoMdClose />
                      </button>
                  </header>
                {/* in progress state */}
                {response?.result===2455 &&(
                    <div className='flex flex-col items-center justify-center w-full p-5'>
                        <span ><FadeLoader color='#03396c' size={13}/></span>
                        <span className='text-[#03396c] text-[12px]'>Processing</span>
                    </div>
                )}

                {response?.result!==2455  &&(
                    <>
                         {/* icon status */}
                        <span
                            className={`text-[35px] ${
                                response?.result == "OK"
                                    ? "text-green-600"
                                    : "b text-red-700"
                            } `}
                        >
                            {response?.result == "OK" ? (
                                <IoMdCheckmarkCircle />
                            ) : (
                                <BiSolidError />
                            )}
                        </span>
                        {/* message */}
                        <div className="text-[12px] text-[#03396c] text-opacity-60">
                            {response?.result == "OK" ? (
                                <div>Bet was placed successfully</div>
                            ) : (
                                <div className='flex flex-col items-center justify-center w-full gap-1 font-poppins'>
                                    <p className='text-center'>
                                        Failed to place a bet,please try again later
                                    </p>
                                    <p className='font-medium'>
                                        Reason:<span className='font-normal text-red-500 b'>{response?.result_text}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                        {/* buttons */}
                        {response?.result == "OK" && (
                            <div className="flex items-center justify-between w-full mt-2 text-[13px] text-[#03396c]">
                                <button 
                                    onClick={()=>buttonCallBack("clear")}
                                    className="h-[35px] basis-[50%] justify-center flex items-center ">
                                    <span className="text-[16px]">
                                        <MdDelete />
                                    </span>
                                    <span> Clear slip</span>
                                </button>
                                <button 
                                    onClick={()=>buttonCallBack("keep")}
                                    className="h-[35px] basis-[50%] flex items-center justify-center ">
                                    <span className="text-[16px]">
                                        <IoIosCopy />
                                    </span>
                                    <span>Keep slip</span>
                                </button>
                            </div>
                        )}
                    </> 
                )} 
                 
              </section>
          </main>
      </div>
  );
}

export default SuccessModal;
