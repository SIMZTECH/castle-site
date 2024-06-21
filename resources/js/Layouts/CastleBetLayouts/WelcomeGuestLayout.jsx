import React,{useState,useEffect } from 'react';
import TopNavBar from './TopNavBar';
import AsideNavLeft from './AsideNavLeft';
import AsideNavRight from './AsideNavRight';
import BottomNavigation from './Navs/BottomNavigation';
import BetSlipModal from './Modals/BetSlipModal';
import MenuDrawer from './Drawers/MenuDrawer';
import { useSearchParams,useNavigate} from 'react-router-dom';
import LogoutOutLoader from './Modals/LogoutOutLoader';
import { isNil } from 'lodash';
import CashOutBetModal from './Modals/CashOutBetModal';
import TopNavBarSkeleton from '../skeletons/TopNavBarSkeleton';
import AsideNavLeftSkeleton from '../skeletons/AsideNavLeftSkeleton';
import AsideNavRightSkeleton from '../skeletons/AsideNavRightSkeleton';
import BetSlipDrawer from './Drawers/BetSlipDrawer';

function WelcomeGuestLayout({children,logOutCallBackHandler,logoutRes,cashOutRes,auth,onSelectedFilterHandler,swarmData}) {
    const navigate=useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [logoutLoader,setLogoutLoader]=useState(false);
    const [cashOutResModal,setCashOutResModal]=useState(false);
    const [openBetSlipDrawer,setOpenBetSlipDrawer]=useState(false);
    const page=searchParams.get("page");

    const showMenuDrawer = () => {
        setOpenDrawer(true);
    };

    const handleCloseDrawer=()=>{
        setOpenDrawer(false);
    }

    // betSlip drawer
    const toggleBetSlipDrawer=()=>{
        setOpenBetSlipDrawer(!openBetSlipDrawer);
    };

    /**
     *
     * @param {boolean} arg //the value comes from logout modal
     */
    const onCloseLogoutLoader=(arg)=>{
        setLogoutLoader(arg);
    };

    /**
     *
     * @param {boolean} arg
     */
    const onOpenLogoutLoader=(arg)=>{
        setLogoutLoader(arg);
    };

     /**
     *
     * @param {boolean} arg //the value comes from logout modal
     */
     const onCloseCashOutModal=(arg)=>{
        setCashOutResModal(arg);
    };

     /**
     *
     * @param {boolean} arg
     */
     const onOpenCashOutModal=(arg)=>{
        setCashOutResModal(arg);
    };

    useEffect(()=>{
        // we catch the response from socket
        if(logoutRes){
            onCloseLogoutLoader(false);
            // route user to home page
            navigate("/castle-site");
        }
    },[logoutRes]);

    useEffect(()=>{
        if(cashOutRes){
            onOpenCashOutModal(true);
            return;
        }
    },[cashOutRes]);

    return (
        <div className="relative w-screen h-screen">
            <div className="relative flex flex-col w-full h-full">
                {/* filter for header layout mobile view */}
                {!swarmData && <TopNavBarSkeleton />}
                {swarmData && <TopNavBar
                    className={`${(page==="profile"||page==="transaction-history") ? "b hidden sm:flex":"flex"}`}
                    logOutCallBackHandler={() => {
                        logOutCallBackHandler(); //send request to socket
                        onOpenLogoutLoader(true); //open loading modal
                    }}
                    callBack={showMenuDrawer}
                />}
                {/* children falls here */}
                <main className="flex flex-col flex-1 overflow-scroll homeScreen">
                    <div className="flex h-full">
                        {/* left flex-20%*/}
                        <div className="basis-[20%] hidden sm:flex sm:flex-col border-r-[1px] border-l-0 border-t-0 border-b-0 border bg-[#f6f8fc] sm:pb-8">
                        {!swarmData && <AsideNavLeftSkeleton />}
                        {swarmData && <AsideNavLeft/>}

                        </div>
                        {/* middle flex-cover available space*/}
                        <section className="flex-1 bg-gray-50">
                            {children}
                        </section>
                        {/* right flex-20%*/}
                        <div className="basis-[20%] hidden sm:block bg-[#f6f8fc] px-1 border-l-[1px] border-r-0 border-t-0 border-b-0 border pb-8 ">
                        {!swarmData && <AsideNavRightSkeleton/>}
                        {swarmData && <AsideNavRight auth={auth}/>}
                        </div>
                    </div>
                </main>

                {/* hide bottom nav on profile */}
                <BottomNavigation 
                    toggleBetSlipDrawer={toggleBetSlipDrawer} 
                    onSelectedFilterHandler={onSelectedFilterHandler} 
                    hider={(page==="profile")||(page==="transaction-history")}
                />
                

                {/* :::::::::::::TODO::Implement the betslip modal mobile view:::::::::::::: */}
                <BetSlipDrawer 
                    auth={auth}
                    isOnBetSlipDrawer={openBetSlipDrawer}
                    onCloseBetSlipDrawer={toggleBetSlipDrawer}
                />
                <MenuDrawer
                    openDrawer={openDrawer}
                    handleCloseDrawer={handleCloseDrawer}
                />

                {/*logout loading loader*/}
                <LogoutOutLoader
                    isOpen={logoutLoader}
                    onClose={onCloseLogoutLoader}
                    response={""}
                />

                {/* cashout modal */}
                <CashOutBetModal
                  isOpen={cashOutResModal}
                  onClose={onCloseCashOutModal}
                  cashOutRes={cashOutRes}
                />
            </div>
        </div>
    );
}
export default WelcomeGuestLayout;
