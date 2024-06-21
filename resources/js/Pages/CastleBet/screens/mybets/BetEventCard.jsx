import React from 'react';
import { IoFootball } from "react-icons/io5";
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';

function BetEventCard({eventData}) {
    const {
        bet_id,
        selection_id,
        coeficient,
        outcome,
        outcome_name,
        away_score,
        cash_out_price,
        competition_name,
        event_name,
        game_name,
        game_start_date,
        home_score,
        is_live,
        market_name,
        region_name,
        selection_price,
        sport_name,
        team1,
        team2
    }=eventData;
    const {formattedTime,formattedDate}=formatDateByTimeStamp(game_start_date);
  return (
      <div className='px-2 py-2 rounded-md shadow-sm bg-[#f6f8fc]'>
          <header className='flex items-center gap-2 mb-1 '>
              <span className='text-textMediumBlue text-opacity-60'>
                  <IoFootball />
              </span>
              <div className='flex flex-col flex-1'>
                  <p className='text-[12px]'>{`${sport_name}/${region_name}/${competition_name}`}</p>
                  <p className='text-[11px]'>{formattedDate+""+`(${formattedTime})`}</p>
              </div>
          </header>
          <div>
            <div className='flex items-center justify-center gap-3'>
                <div>
                    <p className='text-[14px] font-medium'>{team1}</p>
                    <firgure>

                    </firgure>
                </div>
                <p>{(home_score!=null)?`${home_score}`:0}:{(away_score!=null)?`${away_score}`:0 }</p>
                <div>
                    <p className='text-[14px] font-medium'>{team2}</p>
                    <firgure>

                    </firgure>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center leading-5'>
                <p className='text-[12px]'>{event_name}</p>
                {outcome_name=="Lost" && <p className='text-[12px] text-red-600 font-medium'>{outcome_name}</p>}
                {outcome_name=="Won" && <p className='text-[12px] text-green-600 font-medium'>{outcome_name}</p>}
                {outcome_name=="" && <p className='text-[12px] text-gray-600 font-medium'>{outcome_name}</p>}

            </div>
          </div>
          <footer className='flex flex-col border-t-[1px] pt-2 mt-1'>
            <div className='flex items-center justify-between text-[12px]'>
                <p className='font-medium'>Bet: {event_name}</p>
                {outcome!==1 && <p className='font-medium b'>{selection_price}</p>}
            </div>
            <div className='flex items-center justify-between text-[12px]'>
                <p className='font-medium b'>Status</p>
                {outcome==0 && <p className='font-medium text-[#5c5c5c]'>Pending</p>}
                {outcome==3 && <p className='font-medium text-green-600'>Won</p>}
                {outcome==1 && <p className='font-medium text-red-600'>Lost</p>}
            </div>
          </footer>
      </div>
  );
}

export default BetEventCard
