import React, {useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent';
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import {Link, useSearchParams} from 'react-router-dom';


function PopularList({popularData=[],onSelectedFilterHandler}) {
    const [slicedPopularGames,setSlicePopularGames]=useState(popularData);
    const [popularGamesCount,setPopularGamesCount] = useState(6);
    const [searchParams,setSearchParams] = useSearchParams();
    const [route,setRoute]=useState({
        filter:""
    });


    const onPressShowMore=()=>{
        if(popularData.length>popularGamesCount){
            // show more
            setPopularGamesCount(popularData.length)
        }else{
            //show less
            onPressShowLess();
        }
    };

    const onPressShowLess = () => {
        // show less games
        setPopularGamesCount(6);
    }



    useEffect(() => {
        setRoute({
            ...route,
            filter:searchParams.get("filter")
        });
    }, [searchParams]);

  return (
      <div>
          <HeaderComponent title={"Popular"} />
          <div className="w-full pt-3 pb-3">
              {/* list of components */}
              <div className="mb-6">

                  {slicedPopularGames
                      .slice(0, popularGamesCount)
                      .map((popular) => (
                          <Link
                              onClick={()=>onSelectedFilterHandler({identifier:popular?.id,compt_id:popular?.competition,reg_id:popular?.region})}
                              to={`/castle-site?page=league&reg_id=${popular?.region}&compt_id=${popular?.competition}&filter=${popular?.path}`}
                              key={popular?.id}
                              className={`flex items-center justify-between gap-2 mb-3 cursor-pointer group hover:rounded-md hover:bg-primaryColor hover:bg-opacity-5 ${(route?.filter==popular?.path)?"bg-primaryColor bg-opacity-20 rounded-md shadow":""}`}
                          >
                              {/* icon left*/}
                              <figure className="w-[30px] h-[30px] bg-primaryColor group-hover:bg-transparent bg-opacity-10 p-1 rounded-full flex items-center justify-center">
                                  <img
                                      className="w-[20px] h-[20px] rounded-full"
                                      src={popular?.icon}
                                      alt=""
                                  />
                              </figure>
                              {/* labels */}
                              <div className="flex-1 font-poppins text-[11px]">
                                  {popular?.type && (
                                      <h4 className="text-textMediumBlue">
                                          {popular?.type}
                                      </h4>
                                  )}
                                  <p className={`text-[10px]  font-semibold ${(popular?.path==="live"&&route?.filter=="live")?"text-red-700":"text-textMediumBlue"}`}>
                                      {popular?.title}
                                  </p>
                              </div>
                              {/* games available */}
                              <span className="text-[11px] font-poppins w-[30px] h-[30px] rounded-full flex items-center justify-center text-textMediumBlue font-medium">
                                  {popular?.available_games >= 50
                                      ? `${50}+`
                                      : popular?.available_games}
                              </span>
                          </Link>
                      ))}
              </div>

              {/* show more button */}
              <div
                  onClick={() => onPressShowMore()}
                  className="w-full pb-1 text-primaryColor font-poppins text-[13px] gap-3 flex justify-center items-center cursor-pointer border-b-[1px]"
              >
                  <p>
                      {popularData.length == popularGamesCount
                          ? `Show less`
                          : `Show more`}
                  </p>

                  <span>
                      {popularData.length == popularGamesCount ? (
                          <TfiAngleUp />
                      ) : (
                          <TfiAngleDown />
                      )}
                  </span>
              </div>
          </div>
      </div>
  );
}

export default PopularList
