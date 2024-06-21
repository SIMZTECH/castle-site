import React, { useCallback, useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent';
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";

function SportsList({sportsData=[]}) {
    const [slicedSportsGames,setSliceSportsGames]=useState(sportsData);
    const [sportsGamesCount,setSportsGamesCount] = useState(6);

    const onPressShowMore=()=>{
        if(sportsData.length>sportsGamesCount){
            // show more
            setSportsGamesCount(sportsData.length)
        }else{
            //show less
            onPressShowLess();
        }
    };

    const onPressShowLess = () => {
        // show less games
        setSportsGamesCount(6);
    }
  return (
      <div>
          <HeaderComponent title={"Sports"} />
          <div className='w-full pt-3 pb-3'>
              {/* list of components */}
              <div className='mb-6'>
                  {slicedSportsGames.slice(0,sportsGamesCount).map((game, index) => (
                      <div
                        onClick={()=>{
                            // callBack();
                        }}
                          key={game?.id}
                          className='flex items-center justify-between gap-2 mb-3 cursor-pointer group hover:rounded-md hover:bg-primaryColor hover:bg-opacity-5'
                      >
                          {/* icon left*/}
                          <figure className='w-[30px] h-[30px] bg-primaryColor bg-opacity-10 p-1
                          rounded-full font-poppins flex items-center justify-center group-hover:bg-transparent'>
                            <span className='text-textMediumBlue text-[18px] text-opacity-60'>{game?.icon}</span>
                          </figure>
                          {/* labels */}
                          <div className='flex-1 font-poppins text-[11px]'>
                              <h4 className='font-semibold text-textMediumBlue'>{game?.title}</h4>
                          </div>
                      </div>
                  ))}
              </div>

              {/* show more button */}
              {sportsData >= sportsGamesCount && (
                  <div
                      onClick={() => onPressShowMore()}
                      className='w-full pb-1 text-primaryColor font-poppins text-[13px] gap-3 flex justify-center items-center cursor-pointer border-b-[1px]'>
                      <p>{sportsData .length == sportsGamesCount ? `Show less` : `Show more`}</p>

                      <span>{sportsData .length == sportsGamesCount ? <TfiAngleUp /> : <TfiAngleDown />}</span>
                  </div>
              )}
          </div>
      </div>
  )
}

export default SportsList
