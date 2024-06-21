import React, { useContext,useEffect,useRef,useState} from 'react';
import ModalHeader from '../headers/ModalHeader';
import { LiaToggleOnSolid } from "react-icons/lia";
import { betSlipIcon } from '@/assets/icons';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import SelectedGame from '../AsideNavComponents/betSlip/SelectedGame';
import BetSlipUtilities from '@/utilities/BetSlipUtilities';
import { HashLoader } from 'react-spinners';
import { betSlipContext } from '@/Context/BetSlipContext';
import FetchSwarmData from '@/Hooks/FetchSwarmData';
import SuccessModal from './SuccessModal';
import { eventsContext } from '@/Context/EventsCatchContext';
import { useNavigate } from 'react-router-dom';


function BetSlipModal({placeBetCallBackHandler,placeBetRes,auth}){
  const navigate = useNavigate();
  const {totalOddsGenerator,removeAllGamesFromSlip,removeGameFromBetSlip} = BetSlipUtilities();
  const {pressBetEvent,setPressBetEvent}=useContext(eventsContext);
  const {bet_slip}=useContext(betSlipContext);
  const [placeBetLoader,setPlaceBetLoader] = useState(false);
  const [stakeAmount,setStakeAmount] = useState({
    amount:0
  });

  const modalRef=useRef(null);

  /**
   *
   * @param {import('react').FormEvent} e
   */
  const onChangeStakeAmount=(e)=>{
    setStakeAmount({...stakeAmount,[e.target.name]:e.target.value})
  };

  /**
   *
   * @returns Number
   */
  const payOutAmountGenerator=()=>{
    return (stakeAmount?.amount>0)?(Number(totalOddsGenerator())*stakeAmount?.amount).toFixed(2):0;
  };

    //place bet handler
    const placeBetHandler = () => {
        setPlaceBetLoader(true);
        /**
         * @var betData={}
         */
        const betData={
            amount:Number(stakeAmount?.amount),
            bets:Array.from(bet_slip)
        };
        // placeBetCallBackHandler(betData);
        console.log(pressBetEvent,"press bet event....");
    };

   /**
    *
    * @param {boolean} arg
    */
    const onCloseModal=(arg)=>{
        setPressBetEvent(arg);
    };

     /**
    *
    * @param {boolean} arg
    */
     const onOpenModal=(arg)=>{
        setPressBetEvent(arg);
    };

    const closeThisModal=()=>{
        modalRef.current.classList.remove("showBetSlip");
    };


    useEffect(()=>{

        console.log(placeBetRes,"received place bet res in betslip...");
        if(placeBetRes){
            setPlaceBetLoader(false);
            onOpenModal(true);//open success modal
            return;
        }
    },[placeBetRes]);

  return (
      <div
          ref={modalRef}
          className="absolute top-0 bottom-0 left-0 z-10 hidden transition duration-75 ease-in-out select-none bg-blue-50 betSlipModal "
          id="betSlip"
      >
          <div className="flex flex-col">
              <ModalHeader title={"betSlip"} modalName={"betSlip"} />
              <div className="flex flex-col flex-1 mx-2 my-2 pt-14">
                  <div className="mb-2 b">
                      <nav className="flex items-center justify-between gap-5 mb-2 text-[#27393f]">
                          <div className="b font-poppins font-medium h-[35px] shadow-sm flex items-center justify-center cursor-pointer w-[50%]  text-[12px]">
                              <span className="flex items-center gap-2">
                                  Normal ({bet_slip?.length})
                              </span>
                          </div>
                          <div className="b font-poppins font-medium  h-[35px] shadow-sm flex items-center justify-center cursor-pointer w-[50%]  text-[12px]">
                              <span className="flex items-center gap-2">
                                  Virtual ({1})
                              </span>
                          </div>
                      </nav>
                      {/* notice */}
                      {true && (
                          <div className="flex items-center justify-center gap-2 font-poppins">
                              <span className="text-[13px] text-primaryColor font-normal text-opacity-90">
                                  Keep this slip?
                              </span>
                              <span className="text-[22px] text-primaryColor">
                                  <LiaToggleOnSolid />
                              </span>
                          </div>
                      )}
                  </div>
                  {/* actual betslip */}
                  {bet_slip?.length > 0 && (
                      <div className="flex betSlip-gamesContainer p-2 flex-col overflow-y-scroll h-[500px]">
                          {/* list of selected games */}
                          <div className="">
                              {bet_slip.map((game) => (
                                  <SelectedGame
                                      key={game?.game_id}
                                      match={game}
                                      callBack={removeGameFromBetSlip}
                                  />
                              ))}
                          </div>

                          <div>
                              <p className="flex items-center justify-between mx-2">
                                  <span className="text-[12px] text-[#27393f] flex items-center gap-1 font-poppins">
                                      Total Odds
                                      <IoIosInformationCircleOutline />
                                  </span>
                                  <span className="b font-poppins text-[13px] font-medium text-mediumBlackcolor">
                                      {totalOddsGenerator()}
                                  </span>
                              </p>
                              <p className="flex items-center justify-between mx-2">
                                  <span className="text-[13px] text-[#5c5c5c] flex items-center gap-1 font-poppins">
                                      Final Payout
                                      <IoIosInformationCircleOutline />
                                  </span>
                                  <span className="b font-poppins text-[13px] font-medium text-mediumBlackcolor">
                                      {payOutAmountGenerator()}K
                                  </span>
                              </p>
                          </div>
                          {/* input for stake */}
                          <div className="px-2 mt-2">
                              <input
                                  type="number"
                                  name="amount"
                                  onChange={onChangeStakeAmount}
                                  placeholder="Amount (KW)"
                                  className="w-[100%] placeholder:text-[13px] h-[40px] px-2
                                    py-1 rounded-md border-1 border-transparent outline-none focus-within:outline-none text-primaryColor text-[13px]
                                    bg-mediumBlackcolor bg-opacity-10 font-poppins focus:border-primaryColor focus:border-opacity-60 focus:border-[0.5px]"
                              />
                          </div>

                          {/* show only when stake amount is greater than 0 */}
                          {auth?.auth_token && (
                              <>
                                  {stakeAmount?.amount > 0 && (
                                      <div className="w-full px-2 text-white font-poppins text-[13px] mt-2">
                                          <button
                                              disabled={
                                                  placeBetLoader ? true : false
                                              }
                                              onClick={() => placeBetHandler()}
                                              className="w-[100%] bg-primaryColor active:scale-95 py-2 rounded-md cursor-pointer flex items-center justify-center h-[40px]"
                                          >
                                              {placeBetLoader ? (
                                                  <HashLoader
                                                      color="white"
                                                      size={25}
                                                  />
                                              ) : (
                                                  `Place bet`
                                              )}
                                          </button>
                                      </div>
                                  )}
                              </>
                          )}

                          {!auth?.auth_token && (
                              <>
                                  <div className="w-full px-2 text-white font-poppins text-[13px] mt-2">
                                      <button
                                          onClick={() =>{
                                            navigate("/castle-site?page=login");
                                            closeThisModal();
                                        }}
                                          className="w-[100%] bg-primaryColor active:scale-95 py-2 rounded-md cursor-pointer flex items-center justify-center h-[40px]"
                                      >
                                        LOGIN TO PLACE BET
                                      </button>
                                  </div>
                              </>
                          )}

                          <div className="flex items-center justify-center w-full pt-2 pb-2 cursor-pointer">
                              <div
                                  onClick={() => removeAllGamesFromSlip()}
                                  className="flex w-[95%] h-[40px] items-center justify-center gap-1
                                  cursor-pointer text-[13px]
                                            text-mediumBlackcolor font-poppins active:scale-95"
                              >
                                  <RiDeleteBin6Line /> Remove all
                              </div>
                          </div>
                      </div>
                  )}
                  {/* if betslip is empty */}
                  {bet_slip?.length < 1 && (
                      <div className="flex flex-col items-center justify-center p-4 font-poppins text-[#27393f]">
                          <figure className="w-[80px] p-2 h-[80px]  flex items-center justify-center rounded-full bg-black bg-opacity-5">
                              <img
                                  className="rounded-full opacity-20"
                                  src={betSlipIcon}
                                  alt="photo"
                              />
                          </figure>
                          <div className="b font-poppins text-[10px] text-center leading-4 pt-2 text-[#27393f] mb-3">
                              <p>Your betslip is empty</p>
                              <p>Please choose an Odd to place a bet</p>
                          </div>
                          {/*instructions btn */}
                          <button
                              className="b bg-primaryColor w-[80%] font-poppins text-[14px] tracking-wider font-light active:scale-95
                          h-[35px] flex items-center justify-center cursor-pointer text-white rounded-sm shadow-betslipSelectedGame"
                          >
                              LEARN HOW TO BET
                          </button>
                      </div>
                  )}
              </div>

              {/* modal fals here for success */}
              <SuccessModal
                  isOpen={pressBetEvent}
                  onclose={onCloseModal}
                  response={placeBetRes}
              />
          </div>
      </div>
  );
}

export default BetSlipModal;
