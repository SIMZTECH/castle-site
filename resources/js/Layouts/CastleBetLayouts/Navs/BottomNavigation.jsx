import React,{useContext, useEffect, useState} from 'react';
import { IoHome } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { GoChecklist } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { betSlipContext } from '@/Context/BetSlipContext';
import {Link, useSearchParams} from "react-router-dom";
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { storeTempContext } from '@/Context/DataStoreTemp';

const bootmNavLinks=[
    {
        id:1,
        path:"/?page=home",
        title:"Home",
        name:"home",
        icon:<IoHome />
    },
    {
        id:2,
        path:"/?page=league&reg_id=all&compt_id=all&filter=live",
        title:"Live",
        name:"live",
        icon:<IoPlayCircle/>
    },
    {
        id:3,
        path:"/?page=betSlip",
        title:"Bet Slip",
        icon:<CgNotes/>
    },
    {
        id:4,
        path:"/?page=mybets&filter=open",
        title:"My Bets",
        name:"mybets",
        icon:<GoChecklist/>
    },
    {
        id:5,
        path:"/?page=profile",
        title:"Profile",
        name:"profile",
        icon:<FaUser/>
    },
]

function BottomNavigation({onSelectedFilterHandler,toggleBetSlipDrawer,hider}) {
    const {liveGames}=useContext(storeTempContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const {bet_slip}=useContext(betSlipContext);
    const {authUser}=useContext(authUserContext);
    const [totalLiveGames,setTotalLiveGames]=useState(0);

     /**
     * 
     * @param {[]} arg 
     * @returns {number}
     */

     const getArrayLength=(arg)=>{
        let LENGTH=0;
        Object.keys(arg).map((comptKey)=>{
            LENGTH+=1;
        });

        return LENGTH;
    };

    /**
     * 
     * @param {Array<{}>} arg 
     * @return {number}
     */
    const getTotalGamesCount=(arg)=>{
        /**
         * @type {number}
         */
        let total=0;
        if(arg){
            Object.keys(arg?.sport).map((sportKey)=>{
                const sportObj=arg?.sport[sportKey];
                Object.keys(sportObj?.region).map((regionKey)=>{
                    const regionObj = sportObj?.region[regionKey];
                    Object.keys(regionObj?.competition).map((comptKey)=>{
                        const comptObj=regionObj?.competition[comptKey];
                        // use the get length array
                        total+=getArrayLength(comptObj.game);
                    })
                });
            });
        }

        return total;
    };

    /**
     * @return number
     */
    const betsInSlipCounter=()=>{
        const SCALE_FACTOR=40;//allowed number of games in each betslip
        return (((bet_slip?.length/SCALE_FACTOR)*100).toFixed(2));
    };

    useEffect(()=>{
        if(liveGames){
            //TODO::for live games
            setTotalLiveGames(getTotalGamesCount(liveGames)); 
        }
    },[liveGames]);

  return (
      <div className={`fixed bottom-0 w-full bg-gray-900 sm:hidden ${hider?'hidden':''}`}>
          <div className="relative flex items-center text-white h-[60px]">
              {bootmNavLinks.map((val) => (
                  <div
                      className={`flex items-center justify-center last:border-r-0 h-full border-r-[1px] basis-[50%] border-r-smallBlackColor border-opacity-20 ${
                          bet_slip?.length > 0
                              ? "hover:bg-opacity-40 hover:bg-mediumYellowColor"
                              : "hover:bg-primaryColor hover:bg-opacity-40"
                      }  cursor-pointer `}
                      key={val?.id}
                  >
                      {val?.title == "Bet Slip" && (
                          <div className="relative font-poppins flex items-center justify-center w-[55px] h-[60px]">
                              <div
                                  onClick={() => toggleBetSlipDrawer()}
                                  className={`absolute  cursor-pointer h-[50px] w-[50px] flex items-center justify-center rounded-full active:scale-95 bg-black ${
                                      bet_slip?.length < 1
                                          ? "shadow-betSlipButton"
                                          : ""
                                  }`}
                              >
                                  <div className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full">
                                      {bet_slip?.length > 0 && (
                                          <div
                                              className="w-[48px] h-[48px] radial-progress text-[12px] shadow-selectedGamesIndicator text-mediumYellowColor"
                                              style={{
                                                  "--value":
                                                      betsInSlipCounter(),
                                                  "--size": "0",
                                                  "--thickness": "3px",
                                                  "--color": "green",
                                              }}
                                              role="progressbar"
                                          >
                                              <span className="z-10 text-mediumBlackcolor text-[15px] w-[40px] h-[40px] flex items-center justify-center shadow-selectedGamesIndicator bg-mediumYellowColor rounded-full">
                                                  {bet_slip?.length}
                                              </span>
                                          </div>
                                      )}
                                      {/* show betdlip icon */}
                                      {bet_slip?.length < 1 && (
                                          <div>{val?.icon}</div>
                                      )}
                                  </div>
                              </div>
                          </div>
                      )}

                      {val?.title != "Bet Slip" && (
                          <>
                              {val?.title == "Profile" &&
                                  authUser?.auth_token && (
                                      <Link
                                          to={val?.path}
                                          className={`flex flex-col items-center gap-1 cursor-pointer font-poppins ${
                                              searchParams.get("page") ==
                                              val?.name
                                                  ? "b bg-primaryColor"
                                                  : ""
                                          } h-full w-full justify-center`}
                                      >
                                          <span className="text-[13px]">
                                              {val?.icon}
                                          </span>
                                          <p className="text-[10px]">
                                              {val?.title}
                                          </p>
                                      </Link>
                                  )}
                              {val?.title == "Live" && (
                                  <Link
                                      onClick={() =>
                                          onSelectedFilterHandler({
                                              identifier: 1,
                                          })
                                      }
                                      to={val?.path}
                                      className={`flex flex-col items-center gap-1 cursor-pointer font-poppins ${
                                          searchParams.get("page") == val?.name
                                              ? "b bg-primaryColor"
                                              : ""
                                      } h-full w-full justify-center`}
                                  >
                                      <span className="text-[13px]">
                                          {val?.icon}
                                      </span>
                                      <p className="text-[10px]">
                                          {val?.title == "Live"
                                              ? val?.title +
                                                `(${totalLiveGames})`
                                              : val?.title}
                                      </p>
                                  </Link>
                              )}

                              {val?.title != "Profile" &&
                                  val?.title != "Live" && (
                                      <Link
                                          to={val?.path}
                                          className={`flex flex-col items-center gap-1 cursor-pointer font-poppins ${
                                              searchParams.get("page") ==
                                              val?.name
                                                  ? "b bg-primaryColor"
                                                  : ""
                                          } h-full w-full justify-center`}
                                      >
                                          <span className="text-[13px]">
                                              {val?.icon}
                                          </span>
                                          <p className="text-[10px]">
                                              {val?.title}
                                          </p>
                                      </Link>
                                  )}
                          </>
                      )}
                  </div>
              ))}
          </div>
      </div>
  );
}

export default BottomNavigation;
