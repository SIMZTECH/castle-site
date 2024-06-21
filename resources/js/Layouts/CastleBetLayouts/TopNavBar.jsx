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
import { BiLogOutCircle } from "react-icons/bi";
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
        const base="flex-col pb-3 bg-gray-900 select-none sm:pb-0 sm:bg-mediumBlackcolor";
        return base+className;
    };

  return (
      <div className={styleGenerator()}>
          {/* topsection */}
          <div className="flex items-center p-3 sm:justify-between">
              {/* company logo and menu */}
              <div className="relative flex items-center w-full gap-1 text-white ">
                  <button
                      onClick={() =>callBack()}
                      className="text-[22px] rounded-md
                      w-[30px] h-[30px]  flex items-center justify-center cursor-pointer"
                  >
                      <CgMenuLeft />
                  </button>
                  <div className="text-[13px] flex-1 font-poppins flex items-center gap-1">
                      <p>{"CASTLEBET"}</p>
                      <figure className='w-[22px] h-[22px] flex items-center justify-center'>
                        <img src={flg_zambia} className='object-cover '/>
                      </figure>
                  </div>
              </div>

              {/* login/logout/light mode */}
              <div className="flex items-center gap-3 font-poppins">
                  {/* deposit button LOGGED IN USER */}
                  {auth_token && (
                      <button
                        onClick={()=>navigate("/castle-site?page=deposit&filter=All")}
                        className="b bg-mediumYellowColor active:scale-95 w-[45px] flex items-center justify-center h-[25px] font-medium text-mediumBlackcolor text-[10px] rounded-sm">
                          Deposit
                      </button>
                  )}

                  {/* :::::::LOGED IN USER:::::::: */}
                  {auth_token && (
                      <div className="flex items-center gap-2">
                          <div className="text-white text-[10px] flex  flex-col">
                              <p className=" bg-[#202020] rounded-sm cursor-pointer w-[60%] px-2 flex items-center justify-center">
                                  K{balance}
                              </p>
                              <p className="text-[8px]">ID:{user_id}</p>
                          </div>
                          <Link to={"/castle-site?page=profile"}>
                              <div className="text-white shadow-md w-[25px] text-[16px] text-opacity-30 h-[25px] rounded-full flex items-center justify-center cursor-pointer bg-[#202020]">
                                  <RiUser3Fill />
                              </div>
                          </Link>
                      </div>
                  )}

                  {/* hide login buttons if user loged in */}
                  {/* buttons */}
                  {!auth_token && (
                      <div className="flex items-center gap-2 sm:gap-3">
                          <Link to={"/castle-site?page=login"}>
                              <div
                                  className="w-[55px]  font-poppins  font-medium text-white flex items-center justify-center
                        border-smBlackcolor border-opacity-20 text-[11px]  border-solid border-[1px] h-[30px] shadow-authButtonLayout"
                              >
                                  Login
                              </div>
                          </Link>
                          <Link to={"/castle-site?page=register"}>
                              <div
                                  className="w-[55px] font-poppins  flex items-center justify-center
                         bg-primaryColor text-white text-[11px] border-[1px] h-[30px] shadow-authButtonLayout"
                              >
                                  Register
                              </div>
                          </Link>
                      </div>
                  )}

                  {/* mode */}
                  <div className="font-medium text-white text-[18px] sm:text-[15px]  sm:block cursor-pointer">
                      <MdOutlineLightMode />
                  </div>

                  {/* show logout on authenticated users */}
                  {auth_token && (
                      <div
                          onClick={() => logOutCallBackHandler()}
                          className="flex-col active:scale-95 shadow-md leading-3 rounded-full hover:text-whiteSmoke text-[#5c5c5c]  text-[16px] flex items-center justify-center cursor-pointer "
                      >
                          <button className="">
                              <BiLogOutCircle />
                          </button>
                          <p className="text-[9px]">logout</p>
                      </div>
                  )}

                  {/* search button will show on mobile view */}
                  <div className="text-[25px] w-[40px] h-[40px] hidden flex items-center justify-center font-light text-white font-poppins cursor-pointer sm:hidden">
                      <GoSearch />
                  </div>
              </div>
          </div>

          {/* show these on desktop view */}
          {/* bottom section */}
          <div className="items-center justify-between hidden gap-2 px-2 h-[40px] mx-2 bg-opacity-50 sm:flex sm:gap-3 sm:px-3 rounded-2xl bg-smallBlackColor font-poppins mb-3 shadow-layoutMobileNav">
              {/* search input/nav list/help section/printe matches */}
              <div className="flex items-center sm:gap-2">
                  <button className="text-[22px] text-[#5c5c5c] font-poppins rounded-full hover:text-mediumYellowColor hover:text-opacity-50 transition ease-in-out duration-75">
                      <GoSearch />
                  </button>
                  <input
                      type="search"
                      id="search"
                      className="w-full hidden sm: font-poppins text-sm text-white placeholder:font-poppins bg-transparent border-0 outline-none placeholder:text-white placeholder:text-[11px] placeholder:font-light"
                      placeholder="Search matches, teams.."
                  />
              </div>
              {/* nav list */}
              <ul className="flex items-center flex-1 gap-4">
                  {navList.map((nav) => (
                      <Link key={nav?.id}>
                          <li className="text-white text-[11px] font-poppins hover:text-mediumYellowColor hover:text-opacity-50 transition ease-in-out duration-75">
                              {nav?.name}
                          </li>
                      </Link>
                  ))}
              </ul>
              {/* support and other */}
              <div className="flex items-center gap-4 text-[10px] text-[#acabab] font-poppins">
                  <button className="flex items-center gap-1 transition duration-75 ease-in-out cursor-pointer hover:text-mediumYellowColor hover:text-opacity-50">
                      <span className="text-[16px]">
                          <GoQuestion />
                      </span>
                      Help & Support
                  </button>
                  <button className="flex items-center gap-1 transition duration-75 ease-in-out cursor-pointer hover:text-mediumYellowColor hover:text-opacity-50">
                      <span className="text-[16px]">
                          <TfiPrinter />
                      </span>
                      Print Matches
                  </button>
              </div>
          </div>
          {/* bottom navigation responsiveness mobile view */}
          <div className="flex justify-between px-2 py-1 mx-3 bg-opacity-50 rounded-md sm:hidden bg-smallBlackColor shadow-layoutMobileNav">
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
