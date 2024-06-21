import React from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import WelcomeGuestLayout from '@/Layouts/CastleBetLayouts/WelcomeGuestLayout';
import ScreenContentLayout from '@/Layouts/CastleBetLayouts/ScreenContentLayout';


function Bets() {
  const [searchParams, setSearchParams] = useSearchParams();


  console.log({
    params: {
      compt_id: searchParams.get("compt_id"),
      game_id: searchParams.get("game_id"),
      region_id: searchParams.get("region_id"),
    },
    msg: "the search params obtained"

  })
  return (
    <WelcomeGuestLayout>
      <ScreenContentLayout>
          <div>my bests page</div>
      </ScreenContentLayout>

    </WelcomeGuestLayout>

  )
}

export default Bets