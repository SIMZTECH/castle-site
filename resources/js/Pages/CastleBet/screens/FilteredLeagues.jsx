
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LiveGames from './LiveGames';
import LeagueCollectionGames from './LeagueCollectionGames';
import BoostedGames from './BoostedGames';
import TodayGames from './TodayGames';

function FilteredLeagues({requestTodayGamesUpdate,requestBoostedGamesUpdate,requestSpecificGamesUpdate}) {
    const [searchParams,setSearchParams] = useSearchParams();
    const [route,setRoute]=useState({
        page:"",
        filter:"",
        compt_id:'',
        reg_id:''
    });
    //request live games
    /**
     *
     * @param {{
     * page:string,
     * filter:string,
     * compt_id:any,
     * reg_id:any
     * }}arg
     */
    const filterHandler=(arg)=>{
        switch (arg?.filter) {
            case "live":{
                // TODO::logic for fetching live games
                return (<LiveGames/>);
            }
            case "boosted":{
                // TODO::logic for fetching live games
                return (<BoostedGames onRefreshRequestUpdate={requestBoostedGamesUpdate} />);
            }
            case "today":{
                // TODO::logic for fetching live games
                return (<TodayGames onRefreshRequestUpdate={requestTodayGamesUpdate} />);
            }
            default:{
                return (<LeagueCollectionGames urlParams={route} onRefreshRequestUpdate={requestSpecificGamesUpdate}/>);
            }
        }
    };

    useEffect(() => {
        setRoute({
            ...route,
            page:searchParams.get("page"),
            filter:searchParams.get("filter"),
            compt_id:Number(searchParams.get("compt_id")),
            reg_id:Number(searchParams.get("reg_id"))
        });
    }, [searchParams]);



  return (
    <div>
        {filterHandler(route)}
    </div>
  )
}

export default FilteredLeagues;
