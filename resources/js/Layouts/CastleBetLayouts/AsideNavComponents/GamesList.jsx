import React, { useCallback, useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent';
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function GamesList({gamesData=[],callBack}) {
    const [slicedGames,setSliceGames]=useState(gamesData);
    const [gamesCount,setGamesCount] = useState(6);

    const onPressShowMore=()=>{
        if(gamesData.length>gamesCount){
            // show more
            setGamesCount(gamesData.length)
        }else{
            //show less
            onPressShowLess();
        }
    };

    const onPressShowLess = () => {
        // show less games
        setGamesCount(6);
    }

  return (
    <div>
          <HeaderComponent title={"Games"} />
          <div className='w-full pt-3 pb-3'>
              {/* list of components */}
                  {slicedGames.slice(0,gamesCount).map((game,index) => (
                      <Link
                        to={""}
                        onClick={()=>{
                            callBack();
                        }}
                          key={game?.id}
                      >
                        <div className="border-[1px] justify-between cursor-pointer px-2 h-[30px] flex items-center active:scale-95 rounded-sm shadow-sm hover:bg-[#b3cde0] text-[#03396c] mb-2">
                            {/* icon left*/}
                          <figure className="w-[25px] h-[25px] rounded-full p-1">
                            <span className='text-textMediumBlue text-[15px] text-opacity-60'>{game?.icon}</span>
                          </figure>
                          {/* labels */}
                          <div className='flex-1 font-poppins text-[11px]'>
                              <h4 className='font-semibold text-textMediumBlue'>{game?.title}</h4>
                          </div>

                        </div>
                          
                      </Link>
                  ))}

              {/* show more button */}
              {gamesData.length >= gamesCount && (
                  <div
                      onClick={() => onPressShowMore()}
                      className='w-full pb-1 text-primaryColor font-poppins text-[13px] gap-3 flex justify-center items-center cursor-pointer border-b-[1px] '>
                      <p>{gamesData.length == gamesCount ? `Show less` : `Show more`}</p>

                      <span>{gamesData.length == gamesCount ? <TfiAngleUp /> : <TfiAngleDown />}</span>
                  </div>
              )}
          </div>
      </div>
  )
}

export default GamesList
