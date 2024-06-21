import React from 'react';
import { Link } from 'react-router-dom';
import FavouritesList from '../AsideNavComponents/FavouritesList';
import PopularCompetitionList from '../AsideNavComponents/PopularCompetitionList';
import CountriesList from '../AsideNavComponents/CountriesList';
import GamesList from '../AsideNavComponents/GamesList';
import { GamesFixureData } from '@/assets/data/GamesFixureData';
import { MdSpaceDashboard } from "react-icons/md";
import {Drawer } from "flowbite-react";

function MenuDrawer({openDrawer,handleCloseDrawer}){
  
    return (
        <Drawer open={openDrawer} onClose={handleCloseDrawer} className='sm:hidden'>
            <Drawer.Header title="MENU" titleIcon={()=><span className='text-[18px] text-primaryColor'><MdSpaceDashboard/></span>} />
            <Drawer.Items>
                <div className="flex flex-col flex-1 h-screen">
                    {/* favourites */}
                    <FavouritesList favouritesData={[]} />
                    <PopularCompetitionList/>
                    {/* countries */}
                    <CountriesList />
                    {/* games */}
                    <GamesList gamesData={GamesFixureData} />
                </div>
            </Drawer.Items>
        </Drawer>
    );
}

export default MenuDrawer;
