import React, { useEffect, useRef } from 'react'
import { BiSolidError } from 'react-icons/bi';
import { IoMdCheckmarkCircle, IoMdClose } from 'react-icons/io';

function CashOutBetModal({isOpen,onClose,cashOutRes}){

  return (
      <div
          className={`absolute ${isOpen?'flex':'hidden'} bg-[#000000a1] z-30 font-poppins items-center justify-center w-full h-full`}
      >
          <div className="bg-white w-[70%] sm:w-[30%] p-2 flex flex-col rounded-md shadow-md">
              <header className="flex items-center justify-end w-full px-3 py-1">
                  <button
                      onClick={() => onClose(false)}
                      className="text-[18px] text-primaryColor"
                  >
                      <IoMdClose />
                  </button>
              </header>
              <div
                  className={`text-[35px] flex items-center justify-center ${
                      cashOutRes?.result == "OK"
                          ? "text-green-600"
                          : "b text-red-700"
                  } `}
              >
                  {cashOutRes?.result == "OK" ? (
                      <IoMdCheckmarkCircle />
                  ) : (
                      <BiSolidError />
                  )}
              </div>
              {cashOutRes?.result == "Fail" && (
                  <div>
                      <p className="text-[12px] text-center">
                          Failed to cashout, try again{" "}
                      </p>
                      <p className="text-[12px] font-medium text-center">
                          New Price {cashOutRes?.details.new_price}
                      </p>
                  </div>
              )}

              {cashOutRes?.result == "OK" && (
                  <div>
                      <p className="text-[12px] text-center">
                          You have Successfully cashed out{" "}
                          <span className="text-[13px] font-medium text-black">
                              K{2.6}
                          </span>
                      </p>
                      <p className="text-[12px] font-medium text-center">
                          BET ID {26758993}
                      </p>
                  </div>
              )}
          </div>
      </div>
  );
}

export default CashOutBetModal
