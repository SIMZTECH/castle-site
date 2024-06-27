import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import OpenBets from './OpenBets';
import SettledBets from './SettledBets';
import { authUserContext } from '@/Context/UserAuthenticationContext';


/**
 * @var tabNavData = []
 */
const tabNavData=[
    {
        id:1,
        name:"open",
        path:'open'
    },
    {
        id:2,
        name:"settled",
        path:'settled'
    },
    {
        id:3,
        name:"jackpot",
        path:'jackpot'
    },
    {
        id:4,
        name:"virtual",
        path:'virtual'
    },
    {
        id:5,
        name:"free",
        path:'free'
    }
];

function MyBetsScreen(){
    const {authUser}=useContext(authUserContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const [activeTab,setActiveTab]=useState(searchParams.get("filter"));
    const [filteredBets,setFilteredBets]=useState([]);

    /**
     *
     * @param {string} arg
     */
    const tabNavigatorHandler=(arg)=>{
        if (searchParams.has("filter")){
            searchParams.set("filter",arg);
            setSearchParams(searchParams);
        }
    };

    /**
     *
     * @param {number} control
     * @returns {[]}
     */
    const betsFilterHandler = (control) => {
        if (authUser.bet_history?.bets) {
            const { bet_history } = authUser;
            if(control==0){
                   /**
                 * @var arr=[]
                 */
                const arr=[];
                bet_history?.bets.map((bet) => {
                    if(bet.outcome==control) {
                        arr.push(bet);
                    }
                });
                return arr;
            }else{
                   /**
                 * @var arr=[]
                 */
                const arr=[];
                bet_history?.bets.map((bet) => {
                    if(bet.outcome!==0) {
                        arr.push(bet);
                    }
                });
                return arr;
            }
        }

        return [];
    };

    useEffect(()=>{
        setActiveTab(searchParams.get("filter"));
    },[searchParams]);

    useEffect(()=>{
        if(searchParams.get("filter")=="open"){
            /**
             * 0:unsettled
             * 1:lost
             * 2:returned
             * 3:won
             * 5:cashedout
             */
            // 0:unsettled bets
            setFilteredBets(betsFilterHandler(0));
            return;
        }else if(searchParams.get("filter")=="settled"){
            setFilteredBets(betsFilterHandler(1));
            return;
        }

    },[searchParams,authUser]);

    console.log(filteredBets);

  return (
      <main className="flex flex-col h-full pb-8 select-none b font-poppins">
          <div className="bg-[#f6f8fc] h-[40px] border-b-[1px] text-gray-500 flex items-center px-4">
              <p>My Bets</p>
          </div>
          <div className='flex flex-col flex-1 overflow-y-scroll mybets-container'>
              <div className="flex items-center px-2 sm:py-2 ">
                  {tabNavData.map((tab) => (
                      <div
                          key={tab?.id}
                          onClick={() => tabNavigatorHandler(tab.path)}
                          className={`h-[40px] basis-[25%] border-b-[2px] border-b-transparent flex items-center justify-center cursor-pointer translate-transform transition ease-in-out duration-75 text-[12px] sm:text-[14px] ${
                              activeTab === tab.path
                                  ? " border-b-gray-900 border-b-2 text-gray-900 font-medium"
                                  : "text-gray-400"
                          }`}
                      >
                          <p>{tab?.name}</p>
                      </div>
                  ))}
              </div>
              {/* list of bets */}
              <div className="px-1 pt-3 sm:px-2">
                  {activeTab == "open" && <OpenBets openBets={filteredBets}/>}
                  {activeTab == "settled" && <SettledBets settledBets={filteredBets}/>}
              </div>
          </div>
      </main>
  );
}

export default MyBetsScreen;
