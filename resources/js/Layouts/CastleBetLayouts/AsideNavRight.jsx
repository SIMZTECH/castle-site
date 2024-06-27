import React, { useState,useContext, useEffect} from 'react';
import BetSlipUtilities from '@/utilities/BetSlipUtilities';
import {Link} from 'react-router-dom';
import { betSlipContext } from '@/Context/BetSlipContext';
import { betSlipIcon } from '@/assets/icons';
import { LiaToggleOnSolid } from 'react-icons/lia';
import SelectedGame from './AsideNavComponents/betSlip/SelectedGame';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaAngleLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './Modals/SuccessModal';
import { HashLoader } from 'react-spinners';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { isNil } from 'lodash';


function AsideNavRight({auth}){
  const {setPlaceBetReqParams,placeBetResponse,setPlaceBetResponse}=useContext(storeTempContext);
  const navigate=useNavigate();
  const [isOpenBetModal,setOpenBetModal]=useState(false);
  const {bet_slip}=useContext(betSlipContext);
  const {totalOddsGenerator,removeAllGamesFromSlip,removeGameFromBetSlip} = BetSlipUtilities();
  const [placeBetLoader,setPlaceBetLoader] = useState(false);
  const [stakeAmount,setStakeAmount] = useState({
    amount:0
  });

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
    return (stakeAmount?.amount>0)?(totalOddsGenerator()*stakeAmount?.amount).toFixed(2):0;
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

    // TODO::invock the use memo hook in fetchswarm data
    setPlaceBetReqParams(betData)
};

/**
    *
    * @param {boolean} arg
    */
const onCloseModal=(arg)=>{
    setOpenBetModal(arg);

    // clear prev state of the context
    setPlaceBetResponse(null);
};

 /**
*
* @param {boolean} arg
*/
 const onOpenModal=(arg)=>{
    setOpenBetModal(arg);
};

useEffect(() => {
    console.log(placeBetResponse, "received place bet res in betslip...");
    if (!isNil(placeBetResponse)) {
        setPlaceBetLoader(false);
        onOpenModal(true); //open success modal
        return;
    }
}, [placeBetResponse]);



  return (
      <div className="relative flex-1 h-full">
          <header className="h-[40px] flex items-center gap-1 border-b-[1px] font-medium px-2">
              <button
                  onClick={() =>
                      navigate("/?page=mybets&filter=open")
                  }
                  className="flex items-center outline-none hover:underline text-primaryColor b"
              >
                  <span className="font-light text-[15px] b">
                      <FaAngleLeft />
                  </span>
                  <p className="text-[12px]">View my bets</p>
              </button>
          </header>
          <div className="flex flex-col w-full h-full overflow-y-scroll bg-[#f6f8fc] asideNav-right">
              <div className="flex flex-col pt-8 rounded-md">
                  <div className="space-y-1 b">
                      <nav className="flex items-center justify-center gap-5 text-[#03396c] text-opacity-70">
                          <Link className="b font-poppins font-medium  text-[11px]">
                              <span className="flex items-center gap-2">
                                  Bet slip ({bet_slip?.length})
                              </span>
                          </Link>
                          <Link className="b font-poppins text-[11px] font-medium ">
                              <span className="flex items-center gap-2">
                                  My bets ({0})
                              </span>
                          </Link>
                      </nav>

                      {bet_slip?.length > 0 && (
                          <div className="flex items-center justify-center gap-2 font-poppins text-textMediumBlue">
                              <span className="text-[12px]">
                                  Keep this slip?
                              </span>
                              <span className="text-[22px]">
                                  <LiaToggleOnSolid />
                              </span>
                          </div>
                      )}
                  </div>
                  {bet_slip?.length > 0 && (
                      <>
                          <div className="w-full pt-2 mb-8 ">
                              {bet_slip.map((game) => (
                                  <SelectedGame
                                      key={game?.game_id}
                                      match={game}
                                      callBack={removeGameFromBetSlip}
                                  />
                              ))}
                          </div>
                          <div>
                              <div>
                                  <p className="flex items-center justify-between mx-2">
                                      <span className="text-[12px] text-[#5c5c5c] flex items-center gap-1 font-poppins">
                                          Total Odds{" "}
                                          <IoIosInformationCircleOutline />
                                      </span>
                                      <span className="b font-poppins text-[13px] font-medium text-mediumBlackcolor">
                                          {totalOddsGenerator()}
                                      </span>
                                  </p>
                                  <p className="flex items-center justify-between mx-2">
                                      <span className="text-[12px] text-[#5c5c5c] flex items-center gap-1 font-poppins">
                                          Final Payout{" "}
                                          <IoIosInformationCircleOutline />
                                      </span>
                                      <span className="b font-poppins text-[13px] font-medium text-mediumBlackcolor">
                                          {payOutAmountGenerator()}K
                                      </span>
                                  </p>
                              </div>
                          </div>
                          <div className="px-2 mt-2">
                              <input
                                  type="number"
                                  name="amount"
                                  onChange={onChangeStakeAmount}
                                  placeholder="Amount (KW)"
                                  className="w-[100%] placeholder:text-[12px] px-2
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
                                          onClick={() => {
                                              navigate(
                                                  "/?page=login"
                                              );
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
                              <span
                                  onClick={() => removeAllGamesFromSlip()}
                                  className="flex items-center gap-1 cursor-pointer text-[12px] text-mediumBlackcolor font-poppins active:scale-95"
                              >
                                  <RiDeleteBin6Line /> Remove all
                              </span>
                          </div>
                      </>
                  )}

                  {bet_slip?.length < 1 && (
                      <>
                          <div className="flex flex-col items-center justify-center p-4 font-poppins">
                              <figure className="w-[80px] p-3 h-[80px]  flex items-center justify-center rounded-full bg-primaryColor bg-opacity-10">
                                  <img
                                      className="object-cover rounded-full opacity-40"
                                      src={betSlipIcon}
                                      alt="photo"
                                  />
                              </figure>
                              <div className="b font-poppins text-[10px] text-center leading-4 pt-2 text-[#5c5c5c]">
                                  <p>No bet is selected</p>
                                  <p>Please choose an Odd to place a bet</p>
                              </div>
                          </div>
                          {/* learn how to bet btn */}
                          <button className="mx-3 h-[30px] text-[12px] active:scale-95 text-white b bg-primaryColor">
                              LEARN HOW TO BET
                          </button>
                      </>
                  )}
              </div>
          </div>
          {/* modal fals here for success */}
          <SuccessModal
              buttonCallBack={((action)=>{
                if(action==='clear'){
                    removeAllGamesFromSlip();
                    setStakeAmount({...stakeAmount,amount:0});
                }else{
                    // DO Nothing.......
                }
              })}
              isOpen={isOpenBetModal}
              onclose={onCloseModal}
              response={placeBetResponse}
          />
      </div>
  );
}

export default AsideNavRight
