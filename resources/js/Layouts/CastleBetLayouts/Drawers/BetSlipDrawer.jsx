
import { betSlipContext } from '@/Context/BetSlipContext';
import { eventsContext } from '@/Context/EventsCatchContext';
import BetSlipUtilities from '@/utilities/BetSlipUtilities';
import { Drawer } from 'flowbite-react';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../Modals/SuccessModal';
import { LiaToggleOnSolid } from 'react-icons/lia';
import SelectedGame from '../AsideNavComponents/betSlip/SelectedGame';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { HashLoader } from 'react-spinners';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { betSlipIcon } from '@/assets/icons';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { isNil } from 'lodash';

function BetSlipDrawer({auth,isOnBetSlipDrawer,onCloseBetSlipDrawer}){
    const {setPlaceBetReqParams,placeBetResponse,setPlaceBetResponse}=useContext(storeTempContext);
    const navigate = useNavigate();
    const {
        totalOddsGenerator,
        removeAllGamesFromSlip,
        removeGameFromBetSlip,
    } = BetSlipUtilities();
    const { pressBetEvent, setPressBetEvent } = useContext(eventsContext);
    const { bet_slip } = useContext(betSlipContext);
    const [placeBetLoader, setPlaceBetLoader] = useState(false);
    const [isOpenBetModal,setOpenBetModal]=useState(false);
    const [stakeAmount, setStakeAmount] = useState({
        amount: 0,
    });

    const toggleRef=useRef(null);

    /**
     *
     * @param {import('react').FormEvent} e
     */
    const onChangeStakeAmount = (e) => {
        setStakeAmount({ ...stakeAmount, [e.target.name]: e.target.value });
    };

    /**
     *
     * @returns Number
     */
    const payOutAmountGenerator = () => {
        return stakeAmount?.amount > 0
            ? (Number(totalOddsGenerator()) * stakeAmount?.amount).toFixed(2)
            : 0;
    };

    const toggleSwitch=()=>{
        toggleRef.current.classList.toggle("right-0");
    };

    //place bet handler
    const placeBetHandler = () => {
        setPlaceBetLoader(true);
        /**
         * @var betData={}
         */
        const betData = {
            stakeAmount: Number(stakeAmount?.amount),
            bets: Array.from(bet_slip),
        };
        // TODO::invock the use memo hook in fetchswarm data
        setPlaceBetReqParams(betData)
        // placeBetCallBackHandler(betData);
        console.log(pressBetEvent, "press bet event....");
    };

    /**
     *
     * @param {boolean} arg
     */
    const onCloseModal = (arg) => {
        setOpenBetModal(arg);
        // clear prev state of the context
        setPlaceBetResponse(null);
    };

    /**
     *
     * @param {boolean} arg
     */
    const onOpenModal = (arg) => {
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
        <div>
            <Drawer
                position="right"
                open={isOnBetSlipDrawer}
                onClose={onCloseBetSlipDrawer}
                className="bg-gray-900 shadow-md sm:hidden"
            >
                <Drawer.Header
                    title={<span className="text-white">BETSLIP</span>}
                    titleIcon={() => ""}
                />
                <Drawer.Items>
                    <div className="relative flex flex-col flex-1 h-screen">
                        {/* top section */}
                        <div className="mb-2 b">
                            <nav className="flex items-center justify-between px-4 mb-2">
                                <button className="b font-poppins active:scale-95 select-none h-[30px] bg-gray-700 border-[1px] border-gray-600 flex items-center rounded-full justify-center cursor-pointer w-[30%]  text-[12px]">
                                    <span className="flex items-center gap-2 text-[11px]">
                                        Normal ({bet_slip?.length})
                                    </span>
                                </button>
                                <button className="b select-none active:scale-95 font-poppins h-[30px] bg-gray-700 border-[1px] border-gray-600 flex items-center rounded-full justify-center cursor-pointer w-[30%]  text-[12px]">
                                    <span className="flex items-center gap-2">
                                        Virtual ({1})
                                    </span>
                                </button>
                            </nav>
                            {/* notice */}
                            {true && (
                                <div className="flex items-center justify-center gap-2 py-1 font-poppins">
                                    <span className="text-[12px]">
                                        Keep this slip?
                                    </span>
                                    <button
                                        onClick={() => toggleSwitch()}
                                        className="select-none relative w-[40px] rounded-full border-[1px] border-gray-500 h-[15px] flex items-center justify-start bg-gray-700 bg-opacity-70"
                                    >
                                        <span
                                            ref={toggleRef}
                                            className="absolute cursor-pointer transition-transform duration-100   w-[15px] rounded-full h-[15px] bg-gray-300"
                                        ></span>
                                    </button>
                                </div>
                            )}

                            {/* actual betslip */}
                            {bet_slip?.length > 0 && (
                                <div className="flex flex-col p-2 ">
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

                                    <div className="mt-4 font-sans text-[12px]">
                                        <p className="flex items-center justify-between mx-2 ">
                                            <span className="text-[12px] flex items-center gap-1 ">
                                                Total Odds
                                                <IoIosInformationCircleOutline />
                                            </span>
                                            <span className="b font-poppins text-[13px] font-medium">
                                                {totalOddsGenerator()}
                                            </span>
                                        </p>
                                        <p className="flex items-center justify-between mx-2">
                                            <span className="text-[12px] flex items-center gap-1 ">
                                                Final Payout
                                                <IoIosInformationCircleOutline />
                                            </span>
                                            <span className="font-medium b">
                                                {payOutAmountGenerator()}K
                                            </span>
                                        </p>
                                    </div>
                                    {/* input for stake */}
                                    <div className="mt-2 mb-3 ">
                                        <input
                                            type="number"
                                            name="amount"
                                            onChange={onChangeStakeAmount}
                                            placeholder="Amount (KW)"
                                            className="w-[100%] placeholder:text-[12px] text-gray-800 h-[40px] px-2
                                                        py-1 rounded-md border-1 border-transparent outline-none 
                                                        bg-opacity-10 focus:border-gray-900  focus:border-[0.5px]"
                                        />
                                    </div>

                                    {/* show only when stake amount is greater than 0 */}
                                    {auth?.auth_token && (
                                        <>
                                            {stakeAmount?.amount > 0 && (
                                                <div className="w-full text-white font-poppins text-[12px] mt-2">
                                                    <button
                                                        disabled={
                                                            placeBetLoader
                                                                ? true
                                                                : false
                                                        }
                                                        onClick={() =>
                                                            placeBetHandler()
                                                        }
                                                        className="w-full bg-primaryColor active:scale-95 py-2 rounded-md cursor-pointer flex items-center justify-center h-[40px]"
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
                                            <div className="w-full text-white font-poppins text-[13px] mt-2">
                                                <button
                                                    onClick={() => {
                                                        navigate("/castle-site?page=login");
                                                        onCloseBetSlipDrawer();//close the bet slip drawer modal
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
                                            onClick={() =>{
                                                removeAllGamesFromSlip();
                                                setStakeAmount({...stakeAmount,amount:0});
                                            }
                                            }
                                            className="flex w-full border-[2px] border-gray-700 rounded-md h-[40px] items-center justify-center gap-1
                                  cursor-pointer text-[13px] font-sans active:scale-95"
                                        >
                                            <RiDeleteBin6Line /> Remove all
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* if betslip is empty */}
                            {bet_slip?.length < 1 && (
                                <div className="flex flex-col items-center justify-center p-4 font-poppins">
                                    <figure className="w-[80px] p-2 h-[80px] flex items-center justify-center rounded-full bg-white bg-opacity-10">
                                        <img
                                            className="rounded-full"
                                            src={betSlipIcon}
                                            alt="photo"
                                        />
                                    </figure>
                                    <div className="b font-sans text-[10px] font-light text-center tracking-wider leading-4 pt-2 mb-3">
                                        <p>Your betslip is empty</p>
                                        <p>
                                            Please choose an Odd to place a bet
                                        </p>
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

                        {/* bet status */}
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
                </Drawer.Items>
            </Drawer>
        </div>
    );
}

export default BetSlipDrawer;
