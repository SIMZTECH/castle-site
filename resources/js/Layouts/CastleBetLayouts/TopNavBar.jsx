import React, { useContext } from 'react';
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { TfiPrinter } from "react-icons/tfi";
import { IoIosFootball } from "react-icons/io";
import { FaHelicopter } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
import { MdCasino } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { RiUser3Fill } from "react-icons/ri";
import {Link,useSearchParams,useNavigate} from 'react-router-dom';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { BiLogOutCircle, BiSearch } from "react-icons/bi";
import { flg_zambia } from '@/assets/flags/worldFlags';


const navList = [
    {
        id:"1",
        name:"Sports",
        path:"#"
    },
    {
        id:"2",
        name:"Live",
        path:"#"
    },
    {
        id:"3",
        name:"Jackpot",
        path:"#"
    },
    {
        id:"4",
        name:"Spaceman",
        path:"#"
    },
    {
        id:"5",
        name:"Casino",
        path:"#"
    },
    {
        id:"6",
        name:"Virtual Games",
        path:"#"
    },
]

const responsiveNavList=[
    {
        id:1,
        icon:<IoIosFootball />,
        path:"#",
        title:"Soccer"
    },
    {
        id:2,
        icon:<FaHelicopter />,
        path:"#",
        title:"Aviator"
    },
    {
        id:3,
        icon:<TbAugmentedReality />,
        path:"#",
        title:"Virtual"
    },
    {
        id:4,
        icon:<MdCasino />,
        path:"#",
        title:"Casino"
    },
    {
        id:5,
        icon:<GiTrophy />,
        path:"#",
        title:"Jackpot"
    },
];


function TopNavBar({callBack,logOutCallBackHandler,className}) {
    const navigate=useNavigate();
    const {authUser}=useContext(authUserContext);
    const {auth_token,balance,user_id}=authUser;

    const styleGenerator=()=>{
        const base="flex-col flex gap-2 bg-gray-900 select-none sm:p-3 p-2 pb-3 sm:pb-0";
        return base+className;
    };

  return (
      <div className={styleGenerator()}>
          {/* topsection */}
          <div className="flex justify-between sm:justify-start">
              {/* company logo and menu */}
              <div className="relative flex items-center gap-2 text-white ">
                  <button
                      onClick={() =>callBack()}
                      className="text-[22px] rounded-md
                      w-[30px] h-[30px] sm:hidden  flex items-center justify-center cursor-pointer"
                  >
                      <CgMenuLeft />
                  </button>
                  <div className="text-[13px] flex-1 font-poppins flex items-center gap-3 sm:p-4">
                      <p className='text-[13px] sm:text-[25px] font-medium'><span className='font-medium text-primaryColor'>CASTLE</span><span>BET</span></p>
                      <figure className='w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] flex items-center justify-center'>
                        <img src={flg_zambia} className='object-cover'/>
                      </figure>
                  </div>
              </div>

              {/*search bar*/}
              <div className='items-center justify-center flex-1 hidden sm:flex'>
                <div className='flex items-center justify-center w-1/2 px-3 bg-white'>
                    <input 
                      name='search'
                      id='search'
                      type='search'
                      className='w-full px-3 border-0 outline-none focus:border-0 focus:ring-0'
                      placeholder='Search for events and bets'
                      autoComplete={true}
                    />
                    <button type='button' className='text-[25px]  text-gray-600 cursor-pointer'><BiSearch/></button>
                </div>
                
              </div>

              {/* login/logout/light mode */}
              <div className="flex items-center gap-2 font-poppins">
                  {/* deposit button LOGGED IN USER */}
                  {auth_token && (
                      <button
                        onClick={()=>navigate("/?page=deposit&filter=All")}
                        className="b bg-mediumYellowColor active:scale-95 w-[45px] sm:h-[40px] sm:w-[120px] sm:text-[14px] flex items-center justify-center h-[25px] font-medium text-mediumBlackcolor text-[10px] rounded-sm">
                          Deposit
                      </button>
                  )}

                  {/* :::::::LOGED IN USER:::::::: */}
                  {auth_token && (
                      <div className="flex items-center gap-2">
                          <div className="text-white text-[10px] sm:text-[15px] sm:h-[40px] sm:w-[120px] sm:bg-[#202020] sm:px-3  flex  flex-col">
                              <p className=" bg-[#202020] sm:text-[11px] sm:bg-transparent rounded-sm cursor-pointer w-[60%]  px-2 sm:px-0 flex items-center justify-center sm:justify-start">
                                  K{balance}
                              </p>
                              <p className="text-[8px] sm:text-[11px]">ID:{user_id}</p>
                          </div>
                          <Link to={"/?page=profile"}>
                              <div className="text-white shadow-md w-[25px] sm:hover-ring-2 hover:ring-gray-400 text-[16px] sm:text-[22px] text-opacity-30 h-[25px] sm:h-[40px] sm:w-[40px]   rounded-full flex items-center justify-center cursor-pointer bg-[#202020]">
                                  <RiUser3Fill />
                              </div>
                          </Link>
                      </div>
                  )}

                  {/* hide login buttons if user loged in */}
                  {/* buttons */}
                  {!auth_token && (
                      <div className="flex items-center gap-2 sm:gap-3">
                          <Link to={"/?page=login"}>
                              <div
                                  className="w-[55px] sm:w-[120px]  font-poppins  font-medium text-white flex items-center justify-center
                        border-smBlackcolor border-opacity-20 text-[11px] sm:text-[14px]  border-solid border-[1px] h-[30px] sm:h-[40px] shadow-authButtonLayout"
                              >
                                  Login
                              </div>
                          </Link>
                          <Link to={"/?page=register"}>
                              <div
                                  className="w-[55px] sm:w-[120px] font-poppins sm:h-[40px]  flex items-center justify-center
                         bg-primaryColor text-white text-[11px] sm:text-[14px] border-[1px] h-[30px] shadow-authButtonLayout"
                              >
                                  Register
                              </div>
                          </Link>
                      </div>
                  )}

                  {/* mode */}
                  <div className="font-medium sm:mx-3 sm:mr-8 text-white text-[18px] sm:text-[15px]  sm:block cursor-pointer">
                      <MdOutlineLightMode />
                  </div>

                  {/* show logout on authenticated users */}
                  {auth_token && (
                      <div
                          onClick={() => logOutCallBackHandler()}
                          className="flex-col active:scale-95 shadow-md bg-[#202020] sm:mr-3 sm:h-[40px] sm:w-[40px]  leading-3 rounded-full hover:text-whiteSmoke text-gray-500 text-[16px] flex items-center justify-center cursor-pointer "
                      >
                          <button className="">
                              <BiLogOutCircle />
                          </button>
                          <p className="text-[9px]">logout</p>
                      </div>
                  )}
              </div>
          </div>

          {/* show these on desktop view */}
          
          {/* bottom navigation responsiveness mobile view */}
          <div className="flex justify-between px-2 py-1 bg-opacity-50 rounded-md sm:hidden bg-smallBlackColor shadow-layoutMobileNav">
              {responsiveNavList.map((val) => (
                  <div
                      key={val?.id}
                      className="flex flex-col items-center justify-center text-white cursor-pointer font-poppins"
                  >
                      <div className="text-[14px] w-[20px] h-[20px] flex items-center justify-center rounded-full bg-smallBlackColor bg-opacity-55">
                          {val?.icon}
                      </div>
                      <p className="text-[6px]">{val?.title}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default TopNavBar
