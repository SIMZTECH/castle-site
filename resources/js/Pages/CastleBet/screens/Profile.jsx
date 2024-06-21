import React, { useContext, useEffect, useRef } from 'react';
import ScreenContentLayout from '@/Layouts/CastleBetLayouts/ScreenContentLayout';
import { TfiAngleLeft } from "react-icons/tfi";
import {Link,useNavigate} from 'react-router-dom';
import { TfiAngleRight } from "react-icons/tfi";
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";

function Profile() {
    const { authUser } = useContext(authUserContext);
    const navigate = useNavigate();

    return (
        <main className="relative flex flex-col h-full bg-[#f0f2f7] sm:w-[98%] sm:mx-auto sm:pb-8 profile-container">
            <header className="fixed sm:hidden flex items-center w-full h-[55px] px-4  shadow-md select-none bg-gray-800 font-poppins">
                {/* back button */}
                <button
                    onClick={() => navigate("/castle-site?page=home")}
                    className=" text-[16px] gap-1 cursor-pointer flex items-center justify-center"
                >
                    <div className="w-[22px] text-gray-500 h-[22px] bg-white rounded-full flex items-center justify-center">
                        <TfiAngleLeft />
                    </div>
                    <p className="text-[13px]  text-white">Home</p>
                </button>
                <h3 className="flex items-center absolute left-1/2 transform -translate-x-1/2 text-[13px] justify-center  flex-1 text-white">
                    Personal Profile
                </h3>
                {/* title */}
            </header>
            <section className="flex-1 pt-16 overflow-y-scroll sm:pt-5 font-poppins profile-container">
                {/* personal details */}
                <div className='text-center hidden sm:block text-[#27393f] text-[20px] mb-1'>Personal details</div>
                <h4 className="mx-4 text-[14px] text-[#27393f]">Account</h4>

                <div className="p-2 mx-3 my-2 bg-white rounded-sm shadow-sm text-[11px]">
                    <div className="flex items-center justify-between text-[11px] h-[40px] text-[#27393f] border-b-[1px]">
                        <span>User id</span>
                        <p>{authUser?.user_id}</p>
                    </div>
                    <div className="flex items-center justify-between  h-[40px] text-[#27393f] border-b-[1px]">
                        <span>Username</span>
                        <p>{authUser?.username}</p>
                    </div>
                    <div className="flex items-center justify-between  h-[40px] text-[#27393f] border-b-[1px]">
                        <span>Password</span>
                        <div className="flex items-center cursor-pointer text-primaryColor">
                            <p>Change</p>
                            <TfiAngleRight />
                        </div>
                    </div>
                    <div className="flex items-center justify-between  h-[40px] text-[#27393f] border-b-[1px]">
                        <div className="flex flex-col">
                            <p>Phone Number</p>
                            <p>{authUser?.username}</p>
                        </div>
                        <div className="flex items-center cursor-pointer text-primaryColor">
                            <p>Change</p>
                            <TfiAngleRight />
                        </div>
                    </div>
                    <div className="flex items-center justify-between  h-[40px] text-[#27393f] border-b-[1px]">
                        <span>Registration date</span>
                        <p>{authUser?.reg_date}</p>
                    </div>
                    {/*view bet history*/}
                    <button 
                        onClick={() => navigate("/castle-site?page=transaction-history")}
                        className="flex items-center justify-between outline-none w-full active:scale-95 h-[40px] text-[#27393f] border-b-[1px]">
                        <div className='flex items-center gap-1'>
                            <span className='text-[14px] text-[#27393f]'><FaEnvelopeOpenText/></span>
                            <span>Transaction History</span>
                        </div>
                        <p>
                            <TfiAngleRight />
                        </p>
                    </button>
                    {/* deposit */}
                    <button 
                        onClick={() => navigate("/castle-site?page=deposit&filter=All")}
                        className="flex items-center justify-between outline-none w-full active:scale-95 h-[40px] text-[#27393f] border-b-[1px]">
                        <div className='flex items-center gap-1'>
                            <span className='text-[14px] text-[#27393f]'><TbCoins/></span>
                            <span>Deposit</span>
                        </div>
                        <p>
                            <TfiAngleRight />
                        </p>
                    </button>
                    {/* withdraw */}
                    <button 
                        onClick={() => navigate("/castle-site?page=deposit&filter=All")}
                        className="flex items-center justify-between outline-none w-full active:scale-95 h-[40px] text-[#27393f] border-b-[1px]">
                        <div className='flex items-center gap-1'>
                            <span className='text-[14px] text-[#27393f]'><TbCoins/></span>
                            <span>Withdrawal</span>
                        </div>
                        <p>
                            <TfiAngleRight />
                        </p>
                    </button>
                    <div className="flex items-center justify-between text-[12px] h-[40px] text-[#27393f] border-b-[1px]">
                        <span>Status</span>
                        <p>{authUser?.status == 1 ? "Active" : "Inactive"}</p>
                    </div>
                    {/* availaable balance */}
                    <div className="flex items-center justify-between  h-[40px] text-[#27393f] border-b-none">
                        <span className="b text-primaryColor">
                            Available balance
                        </span>
                        <p className="p-1 text-white rounded-md bg-primaryColor">
                            K {authUser?.balance}
                        </p>
                    </div>
                </div>
                {/* personal infor */}
                <h4 className="mx-4 text-[14px] text-[#27393f]">
                    Personal Information
                </h4>
                <div className="p-2 mx-3 my-2 bg-white rounded-sm shadow-sm text-[11px]">
                    <div className="flex items-center justify-between  h-[40px] text-[#27393f] border-b-[1px]">
                        <span>First name</span>
                        <p>{authUser?.first_name}</p>
                    </div>
                    <div className="flex items-center justify-between text-[12px] h-[40px] text-[#27393f] border-b-[1px]">
                        <span>Last name</span>
                        <p>{authUser?.last_name}</p>
                    </div>
                    <div className="flex items-center justify-between text-[12px] h-[40px] text-[#27393f] border-b-[1px]">
                        <span>Currency</span>
                        <p>{authUser?.currency}</p>
                    </div>

                    {/* withdraw */}
                    <div className="flex items-center justify-between text-[12px] h-[40px] text-[#27393f] border-b-none">
                        <span>Language</span>
                        <p>{authUser?.language}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Profile
