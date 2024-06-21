import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams,useLocation, useNavigate} from 'react-router-dom';
import { TfiAngleLeft } from "react-icons/tfi";
import { HiMiniSquare3Stack3D } from 'react-icons/hi2';
import BetEventCard from './BetEventCard';
import { authUserContext } from '@/Context/UserAuthenticationContext';

function ActualBetSlip({cashOutCallBackHandler,cashOutRes}) {
    const {authUser}=useContext(authUserContext);
    const [bet,setBet]=useState([]);
    const navigate=useNavigate();
    const {state}=useLocation();

    /**
     * @return {number}
     */
    const eventLostWonGenerator=()=>{
        if(bet.length>0){
            /**
             * @type {Array<any>}
             */
            const arr=[];

            bet[0].events.map((el)=>{
                if(el?.outcome==1 || el?.outcome==3){
                    arr.push(el)
                }
            });

            return (arr?.length>0)?arr.length:0;
        }

        return 0;

    };

    /**
     * @return {number}
     */
    const cashOutGenerator=()=>{
        if(bet.length>0){
            const SCALE=bet[0]?.amount;//stake price
            const {cash_out}=bet[0];
            return (cash_out/SCALE)*100;
        }
        return 0;
    };

    useEffect(()=>{
        if(authUser?.bet_history?.bets?.length>0){
            /**
             * @type Array
             */
            const bets=authUser?.bet_history?.bets;
            const foundBet=bets.filter((el)=>el?.id==state?.bet_id);
            setBet(foundBet);
            return;
        }

    },[authUser]);

    useEffect(()=>{

        // TODO::here implement the cashout response

    },[cashOutRes]);

    console.log(bet);

  return (
      <div className="flex flex-col h-full pb-8 select-none b font-poppins">
          <header className="bg-[#f6f8fc] h-[40px] border-b-[1px] flex items-center px-4 relative">
              <button
                  onClick={() =>
                      navigate("/castle-site?page=mybets&filter=open")
                  }
                  className="flex items-center outline-none text-[13px] hover:underline"
              >
                  <span>
                      <TfiAngleLeft />
                  </span>
                  <p>Go back</p>
              </button>
              <p className="relative flex items-center justify-center flex-1 text-[13px] text-textMediumBlue font-medium">
                  <span className="absolute transform -translate-x-1/2 left-1/2">
                      BET ID {state?.bet_id}
                  </span>
              </p>
          </header>
          <section className="flex-1 overflow-y-scroll bg-white text-textMediumBlue betEventList-container">
              {bet?.length > 0 && (
                  <div className="px-4 py-2 bg-[#f6f8fc]">
                      <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                              <span className="text-primaryColor">
                                  <HiMiniSquare3Stack3D />
                              </span>
                              <p className="text-[12px]">Events {bet.length}</p>
                          </div>
                          <p className="text-[12px]">
                              {eventLostWonGenerator()} of{" "}
                              {bet[0]?.events?.length} completed
                          </p>
                      </div>
                      {bet[0]?.outcome != 5 && (
                          <p className="flex items-center justify-between text-[12px]">
                              <span>Odds</span>
                              <span>{bet[0]?.k}</span>
                          </p>
                      )}

                      <p className="flex items-center justify-between text-[12px]">
                          <span>Stake</span>
                          <span>K{bet[0]?.amount}</span>
                      </p>
                      <p className="flex items-center justify-between text-[12px]">
                          <span>Status</span>
                          {bet[0]?.outcome == 0 && (
                              <span className="text-[#5c5c5c] font-medium">
                                  Not Resulted
                              </span>
                          )}
                          {bet[0]?.outcome == 1 && (
                              <span className="font-medium text-red-600">
                                  Lost
                              </span>
                          )}
                          {bet[0]?.outcome == 2 && (
                              <span className="text-[#5c5c5c] font-medium">
                                  void
                              </span>
                          )}
                          {bet[0]?.outcome == 3 && (
                              <span className="text-green-600">Won</span>
                          )}
                          {bet[0]?.outcome == 5 && (
                              <span className="text-green-600">Cashed out</span>
                          )}
                      </p>
                      {(bet[0]?.outcome==3 || bet[0]?.outcome == 5) && (
                          <p className="flex items-center justify-between text-[12px]">
                              <span>Payout</span>
                              <span>K{bet[0]?.payout}</span>
                          </p>
                      )}

                      {((bet[0]?.outcome !=3) && (bet[0]?.outcome !=5)) && (
                          <p className="flex items-center justify-between text-[12px]">
                              <span>Possible Winning</span>
                              <span>K{bet[0]?.possible_win}</span>
                          </p>
                      )}

                      {/* cashout button */}
                      {bet[0]?.cash_out > 0 && (
                          <div className="flex items-center gap-2 mt-1">
                              <button
                                  onClick={() =>
                                      cashOutCallBackHandler({
                                          bet_id: state?.bet_id,
                                          price: bet[0]?.k,
                                      })
                                  }
                                  className="w-[50px] shadow-buttonShadow rounded-sm active:scale-95 h-[25px] py-1 text-white text-[10px] bg-green-800"
                              >
                                  Cashout
                              </button>
                              <div className="h-[17px] flex-1 bg-blue-100 shadow-sm relative rounded-full">
                                  <p
                                      style={{
                                          width: `${cashOutGenerator()}%`,
                                      }}
                                      className={`absolute top-0 bottom-0 left-0 px-2 rounded-full text-center text-[12px] flex items-center justify-center text-white bg-green-800`}
                                  >
                                      K{bet[0]?.cash_out}
                                  </p>
                              </div>
                          </div>
                      )}
                  </div>
              )}

              {/* events in bet */}
              {bet.length > 0 && (
                  <div className="px-4 pt-2 space-y-2 bg-white">
                      {bet[0].events?.map((el) => (
                          <BetEventCard key={el?.bet_id} eventData={el} />
                      ))}
                  </div>
              )}
          </section>
      </div>
  );
}

export default ActualBetSlip
