import React from 'react';
import WelcomeGuestLayout from '@/Layouts/CastleBetLayouts/WelcomeGuestLayout';
import FetchSwarmData from '@/Hooks/FetchSwarmData';
import { useEffect } from 'react';
import LeaguesCollection from '@/Layouts/CastleBetLayouts/LeaguesLists/LeaguesCollection';
import { BetSlipContextProvider } from '@/Context/BetSlipContext';

function Group({ params }) {
  const [isReady, swarmData, authData, writeSessionData, getAllGamesForWelcome] = FetchSwarmData();
  const [showSplashScreen, setShowSplashScreen] = React.useState(false);
  const [key, setKey] = React.useState(1);
  const [fetchGamekey, seFetchGametKey] = React.useState(1);


  const { sport_id, region_id, competition_id, market_type } = params;

  useEffect(() => {
    setShowSplashScreen(true);
    if (isReady && key == 1) {
      setKey(key + 1);
      setShowSplashScreen(false);
      writeSessionData();
      return;
    }
  }, [isReady]);

  useEffect(() => {
    if (isReady && authData && fetchGamekey == 1) {
      seFetchGametKey(fetchGamekey + 1);
      getAllGamesForWelcome(Number(region_id), Number(sport_id), "Soccer", Number(competition_id), market_type);
    }
  }, [authData]);


  useEffect(() => {
    console.log("finally the swarm data is here", swarmData);
  }, [swarmData]);



  return (
    <BetSlipContextProvider>
      <WelcomeGuestLayout
        showSplashScreen={showSplashScreen}
      >
        {/* Filter components */}
        {/* games display */}
        <LeaguesCollection
          fetchedData={swarmData?.data}
          gameDetails={params}
        />
      </WelcomeGuestLayout>

    </BetSlipContextProvider>

  )
}

export default Group;