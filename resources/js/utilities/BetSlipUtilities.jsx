import React, { useContext } from 'react';
import { betSlipContext } from '@/Context/BetSlipContext';


function BetSlipUtilities() {
    const { bet_slip, dispatch } = useContext(betSlipContext);
    /**
   *
   * @returns number
   */
    const totalOddsGenerator = () => {
        let totalOdds = (bet_slip.length > 0) ? 1 : 0;
        Object.keys(bet_slip).map((key) => {
            totalOdds = totalOdds*Number(bet_slip[key].market_price);
        });
        return totalOdds.toFixed(2);
    };

     /**
   *
   * @param {Number} market_id //market_id
   */
  const removeGameFromBetSlip=(market_id)=>{
    /**
     * @var []
     */
    const copyObject = [...bet_slip];
    const foundIndex = copyObject.findIndex((val)=>val?.market_id==market_id);
    copyObject.splice(foundIndex,1);
    dispatch(
      {type:"LOGGED",
        payload:{
            bet_slip:copyObject}
      });
  }

//   remove all games from betlisp
const removeAllGamesFromSlip=()=>{
    //remove all games from bet slip
    console.log("i have removed games....");
    dispatch(
      {type:"CLEARBETSLIP",
        payload:{
            bet_slip:[]}//set it to empty
      });
  };

    return {
        totalOddsGenerator,
        removeGameFromBetSlip,
        removeAllGamesFromSlip,
    }
}

export default BetSlipUtilities;
