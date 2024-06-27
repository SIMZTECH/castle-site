import React from 'react';
import FavouritesList from './AsideNavComponents/FavouritesList';
import GamesList from './AsideNavComponents/GamesList';
import { GamesFixureData } from '@/assets/data/GamesFixureData';
import CountriesList from './AsideNavComponents/CountriesList';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PopularCompetitionList from './AsideNavComponents/PopularCompetitionList';


function AsideNavLeft(){

  return (
      <div className="relative flex flex-col flex-1 h-full">
          {/* route to home */}
          <Link to={"/?page=home"}>
              <div className="flex  items-center h-[40px] gap-1 border-b-[1px] px-2 font-poppins rounded-md hover:bg-blue-50">
                  <span className="text-[20px] text-primaryColor">
                      <IoHome />
                  </span>
                  <p className="text-[13px] text-primaryColor font-medium">
                      Home
                  </p>
              </div>
          </Link>
          <div className="flex flex-col flex-1 h-screen">
              <div className="p-3 h-[600px] overflow-y-scroll asideNavRight">
                  {/* favourites */}
                  <FavouritesList favouritesData={[]} />

                  <PopularCompetitionList/>
                  
                  {/* countries */}
                  <CountriesList />

                  {/* games */}
                  <GamesList gamesData={GamesFixureData} />
              </div>
          </div>
      </div>
  );
}

export default AsideNavLeft
