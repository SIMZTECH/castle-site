import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { BetSlipContextProvider } from '@/Context/BetSlipContext';
import FetchSwarmData from '@/Hooks/FetchSwarmData';
import { useEffect } from 'react';
import { useContext } from 'react';
import { SwarmDataContext } from '@/Context/SwarmDataContext';
import SplashScreen from './SplashScreen/SplashScreen';
import {useSearchParams} from 'react-router-dom';
import WelcomeGuestLayout from '@/Layouts/CastleBetLayouts/WelcomeGuestLayout';
import Welcome from './Welcome';
import GameScreen from './screens/GameScreen';
import Login from './screens/Auth/Login';
import Profile from './screens/Profile';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import AvailableAgents from './screens/funds/AvailableAgents';
import MyBetsScreen from './screens/MyBetsScreen';
import ActualBetSlip from './screens/mybets/ActualBetSlip';
import Register from './screens/Auth/Register';
import FilteredLeagues from './screens/FilteredLeagues';
import { storeTempContext } from '@/Context/DataStoreTemp';
import TransactionHistory from './screens/TransactionHistory';

function Root() {
    const { dispatch } = useContext(SwarmDataContext);
    const { authUser } = useContext(authUserContext);
    const {setGetGamesByCompetition}=useContext(storeTempContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [route, setRoute] = useState({
        page: "",
    });
    const {
        isReady,
        writeSessionData,
        loginUserFirstTime,
        swarmData,
        userAuth,
        logoutUser,
        logoutRes,
        registerUser,
        registerRes,
        requestCashout,
        cashOutRes,
        getAllLiveGames,
        getSingleGameDetails,
        getBoostedGames,
        getTodayGamesByTimeStamp,
        getGameByRegionAndCompetition
    } = FetchSwarmData();

    const [key, setKey] = React.useState(1);

    /**
     *
     * @param {*} arg
     */
    function storeFetchedSwarmData(arg) {
        console.log("fetched swarm data stored in storage....");
        dispatch({
            type: "SWARMLOGGED",
            payload: {
                storeSwarmData: arg,
            },
        });
    }

    /**
     *
     * @param {*} arg
     */
    const logOutAuthenticatedUser = (arg) => {
        logoutUser(authUser);
    };

    /**
     *
     * @param {{
     * username:string,
     * password:string,
     * confirmPassword:string,
     * agreement:boolean
     * }} arg
     */
    const userRegistrationCallBack = (arg) => {
        const { username, password } = arg;
        registerUser({ username, password });
    };

    /**
     *
     * @param {{
     * bet_id:number,
     * price:number,
     * mode:number
     * }} arg
     */
    const cashOutCallBackHandler = (arg) => {
        //TODO::Implement the cashback logic
        console.log(arg, "cashout bet id.......");
        requestCashout(arg);
    };

    /**
     *
     * @param {{
     * identifier:number,
     * compt_id:number|string,
     * reg_id:number|string
     * }}arg //arg data comes from the caller in the aside navigation
     */
    const onSelectedFilterHandler = (arg) => {
        const {compt_id,reg_id}=arg;
        // clear prev data in context
        setGetGamesByCompetition(null);

        setTimeout(() => {
            getGameByRegionAndCompetition({compt_id,reg_id});
        },100);
       
        console.log(arg,"the params.....");
    };

    //Request live games updates
    const requestLiveGamesUpdate=()=>{
        getAllLiveGames();
    };

    // request to day games update on refresh
    const requestTodayGamesUpdate=()=>{
        getTodayGamesByTimeStamp();
    };

    //request bosted games update on refresh
    const requestBoostedGamesUpdate=()=>{
        getBoostedGames();
    };

    /**
     *
     * @param {{
     * game_id:number,
     * competition_id:number,
     * region_id:number
    *}} arg //arg comes from the callback caller
*/
    const requestGetGameDetails=(arg)=>{
        getSingleGameDetails(arg);
    };

    useEffect(() => {
        if (isReady && key == 1) {
            setKey(key + 1);
            writeSessionData();
            return;
        }
    }, [isReady]);

    useEffect(() => {
        storeFetchedSwarmData(swarmData);
    }, [swarmData]);

    useEffect(() => {
        setRoute({ ...route, page: searchParams.get("page") });
    }, [searchParams]);

    return (
        <BetSlipContextProvider>
            <WelcomeGuestLayout
                logoutRes={logoutRes}
                logOutCallBackHandler={logOutAuthenticatedUser}
                cashOutRes={cashOutRes}
                auth={authUser}
                onSelectedFilterHandler={onSelectedFilterHandler}
            >
                {/*home display all games collection for different regions */}
                {(route?.page == null || route?.page == "home") && <Welcome />}

                {/*group of games display */}
                {route?.page == "league" && (
                    <FilteredLeagues
                        requestLiveGamesUpdate={requestLiveGamesUpdate}
                        requestTodayGamesUpdate={requestTodayGamesUpdate}
                        requestBoostedGamesUpdate={requestBoostedGamesUpdate}
                        requestSpecificGamesUpdate={getGameByRegionAndCompetition}
                    />)}

                {/*group of games display */}
                {route?.page == "game" && <GameScreen requestGetGameDetails={requestGetGameDetails} />}

                {/* user profile display */}
                {route?.page == "profile" && <Profile />}

                {/* transaction history */}
                {route?.page == "transaction-history" && <TransactionHistory />}

                {/* my bets display */}
                {route?.page == "mybets" && <MyBetsScreen />}

                {/*user register */}
                {route?.page == "register" && (
                    <Register
                        userRegistrationCallBack={userRegistrationCallBack}
                        registerRes={registerRes}
                    />
                )}

                {/*money deposit display */}
                {route?.page == "login" && (
                    <Login
                        loginCallBackHandler={loginUserFirstTime}
                        authStatus={userAuth}
                    />
                )}

                {/*money deposit display */}
                {route?.page == "deposit" && <AvailableAgents />}

                {/*money deposit display */}
                {route?.page == "betslip" && (
                    <ActualBetSlip
                        cashOutRes={cashOutRes}
                        cashOutCallBackHandler={cashOutCallBackHandler}
                    />
                )}
            </WelcomeGuestLayout>
        </BetSlipContextProvider>
    );
}

export default Root;
