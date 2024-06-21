import React from 'react';
import BetCardGroup from './mybets/BetCardGroup';
import ScaleLoader  from 'react-spinners/ScaleLoader';

function OpenBets({openBets}) {
    return (
        <div>
            {/* add a loader */}
            {openBets && (
                <>
                    {openBets?.length > 0 && (
                        <>
                            {openBets.map((bet) => (
                                <BetCardGroup
                                    date_time={bet?.date_time}
                                    odds={bet?.k}
                                    amount={bet?.amount}
                                    bet_id={bet?.id}
                                    possible_win={bet?.possible_win}
                                    events={bet?.events}
                                    outcome={bet?.outcome}
                                />
                            ))}
                        </>
                    )}
                    {/* empty section */}
                    {openBets?.length < 1 && (
                      <div className="flex items-center justify-center font-poppins text-[12px]">
                          <p className='w-[60%] text-center'>No open bets available bets available</p>
                      </div>
                  )}
                </>
            )}
            {/* for loader */}
            {!openBets && (
                <div className="flex items-center justify-center">
                    <span className="">
                        <ScaleLoader size={22} color="#0E76BC" />
                    </span>
                </div>
            )}
        </div>
    );
}

export default OpenBets;
