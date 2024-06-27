import {createContext,useState } from "react";

export const storeTempContext=createContext(null);

export const StoreTempContextProvider=({children})=>{
    const [liveGames,setLiveGames]=useState(null);
    const [tempSwarmData,setTempSwarmData]=useState(null);
    const [ getBoostedGames,setGetBoostedGames]=useState(null);
    const [ getSingleGame,setGetSingleGame]=useState(null);
    const [getTodayGames,setTodayGames]=useState(null);
    const [getGamesByCompetition,setGetGamesByCompetition]=useState(null);
    const [getCompAndRegParams,setGetCompAndRegParams]=useState(null);
    const [placeBetReqParams,setPlaceBetReqParams]=useState(null);
    const [placeBetResponse,setPlaceBetResponse]=useState(null);
    const [liveGamesUpdateKey,setLiveGamesUpdateKey]=useState(0);
    const [singleLiveGamesUpdateKey,setSingleLiveGamesUpdateKey]=useState(0);
    const [getGameDetailsParams,setGetGameDetailsParams]=useState(null);
    const [getDepositParams,setGetDepositParams]=useState(null);
    const [getPaymentResponse,setGetPaymentResponse]=useState(null);
    const [liveGamesUpdate,setLiveGamesUpdate]=useState(null);
    const [registerRes,setRegisterRes]=useState(null);

    return (
        <storeTempContext.Provider
          value={{
            registerRes,
            setRegisterRes,
            liveGames,
            liveGamesUpdate,
            setLiveGamesUpdate,
            setLiveGames,
            tempSwarmData,
            setTempSwarmData,
            getBoostedGames,
            setGetBoostedGames,
            getSingleGame,
            setGetSingleGame,
            getTodayGames,
            setTodayGames,
            getGamesByCompetition,
            setGetGamesByCompetition,
            getCompAndRegParams,
            setGetCompAndRegParams,
            placeBetReqParams,
            setPlaceBetReqParams,
            placeBetResponse,
            setPlaceBetResponse,
            liveGamesUpdateKey,
            setLiveGamesUpdateKey,
            getGameDetailsParams,
            setGetGameDetailsParams,
            singleLiveGamesUpdateKey,
            setSingleLiveGamesUpdateKey,
            getDepositParams,
            setGetDepositParams,
            getPaymentResponse,
            setGetPaymentResponse
          }}
        >
            {children}
        </storeTempContext.Provider>
    );
};
