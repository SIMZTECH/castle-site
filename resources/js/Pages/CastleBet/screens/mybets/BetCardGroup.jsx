import React from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { TfiAngleRight } from "react-icons/tfi";
import { useNavigate} from 'react-router-dom';
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';

function BetCardGroup({amount,odds,outcome,payout,events,bet_id,date_time,possible_win}) {
    const {formattedDate,formattedTime}=formatDateByTimeStamp(date_time);
    const navigate=useNavigate();

  return (
      <div
          onClick={() =>
              navigate(`/castle-site?page=betslip&betslip_id=${bet_id}`, {
                  state: { bet_id },
              })
          }
          className="px-3 py-1 mb-3 bg-[#f6f8fc8d] rounded-md cursor-pointer shadow-sm"
      >
          <header className="flex items-center gap-3 border-b-[1px] pb-1">
              {/* status icon */}
              {(outcome == 0 || outcome == 2) && (
                  <span className="text-textMediumBlue text-[18px]">
                      <IoMdCheckmarkCircle />
                  </span>
              )}
              {outcome == 1 && (
                  <span className="text-red-700 text-[18px]">
                      <FaCircleMinus />
                  </span>
              )}
              {(outcome == 5 || outcome == 3) && (
                  <span className="text-green-700 text-[18px]">
                      <IoMdCheckmarkCircle />
                  </span>
              )}
              {/* menue */}
              <div className="flex-1 text-[11px]">
                  <p>
                      {formattedDate} <span>({formattedTime})</span>
                  </p>
                  <p className="flex items-center gap-1">
                      Accumulator{" "}
                      <span className="b text-primaryColor">
                          <HiMiniSquare3Stack3D />
                      </span>{" "}
                      {events?.length}
                  </p>
                  <p>
                      ID <span>{bet_id}</span>
                  </p>
              </div>
              <span className="text-[15px]">
                  <TfiAngleRight />
              </span>
          </header>
          <div className="flex flex-col pt-1 space-y-1 text-[11px] text-textMediumBlue">
              {outcome !== 5 && (
                  <div className="flex items-center justify-between">
                      <p>Odds</p>
                      <p>{odds}</p>
                  </div>
              )}

              <div className="flex items-center justify-between">
                  <p>Stake</p>
                  <p>K{amount}</p>
              </div>
              {(outcome==3||outcome==5) &&(
                <div className="flex items-center justify-between">
                    <p>Paid Out</p>
                    <p>K{payout}</p>
                </div>
              )}
              <div className="flex items-center justify-between">
                  <p>status</p>
                  <p className={`capitalize b ${outcome==1? "text-red-500 font-medium": `${(outcome==3||outcome==5)? "text-green-500 font-medium":`${(outcome==2||outcome==0)?"text-gray-700":""}`}`}`}>
                    {(outcome==3) && <span>Won</span>}
                    {(outcome==5) && <span>Cashed Out</span>}
                    {(outcome==1) && <span>Lost</span>}
                    {(outcome==2) && <span>Void</span>}
                    {(outcome==0) && <span>Not Resulted</span>}
                  </p>
              </div>
              {/* expected return */}
              {outcome !== 5 && (
                  <div className="flex items-center justify-between">
                      <p>return</p>
                      <p>K{possible_win}</p>
                  </div>
              )}
          </div>
      </div>
  );
}

export default BetCardGroup
