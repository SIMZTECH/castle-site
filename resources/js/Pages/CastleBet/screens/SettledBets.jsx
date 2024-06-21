import React, { useEffect, useState } from 'react'
import BetCardGroup from './mybets/BetCardGroup'
import { ScaleLoader } from 'react-spinners'

function SettledBets({settledBets}) {
    const [settledBetsData, setSettledBetsData] = useState([]);

    useEffect(() => {
        if (settledBets.length > 0) {
            setSettledBetsData(settledBets);
            return;
        }
    }, [settledBets]);

    return (
        <div>
            <>
                {settledBetsData?.length > 0 && (
                    <>
                        {settledBetsData.map((bet) => (
                            <BetCardGroup
                            amount={bet?.amount}
                            odds={bet?.k}
                            outcome={bet?.outcome}
                            payout={bet?.payout}
                            events={bet?.events}
                            bet_id={bet?.id}
                            date_time={bet?.date_time}
                            possible_win={bet?.possible_win}
                            />
                        ))}
                    </>
                )}
                {/* empty section */}
                {settledBetsData?.length < 1 && (
                    <div className="flex items-center justify-center font-poppins text-[12px]">
                        <p className="w-[60%] text-center">
                            No settled bets available bets available
                        </p>
                    </div>
                )}
            </>
            {/* for loader */}
            {(settledBets==null ||settledBets==undefined) && (
                <div className="flex items-center justify-center">
                    <span className="">
                        <ScaleLoader size={22} color="#0E76BC" />
                    </span>
                </div>
            )}
        </div>
    );
}

export default SettledBets
