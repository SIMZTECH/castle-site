import React,{ useContext } from "react";
import { betSlipContext } from "@/Context/BetSlipContext";

function MarketHandlerUtilities() {
    const { bet_slip, dispatch } = useContext(betSlipContext);
    /**
    *
    * @param {{
    *
    * }} argData
    */

    const onPressGameOddHighlighter = (argData) => {
        /**
             * @var copyObject[]
             */
        const copyObject = [...bet_slip];

        const {
            market_id,
            game_id,
            selection,
            market_price,
            home_team,
            away_team,
            competition,
            start_time,
            market_name,
            sport_name,
            region_name,
            event_id
        } = argData;

        console.log(argData,"am testing method in utilities.......");

        if(isGameByIdExistsInBetSlip(game_id)) {
            // what now that a game exist?get the game details
            const foundGameByGame_id = copyObject.find((el) => el?.game_id == game_id);
            const foundGameByGameIdIndex=copyObject.findIndex((el)=>el?.game_id==game_id);
            // check if game by market_id exists in the slip
            if(!isGameMarketIdExistInBetSlip(foundGameByGame_id?.market_id)){
                copyObject.splice(foundGameByGameIdIndex,1);
                copyObject.push(argData);
            }else{
                // compare the event_id found and that of the supplied event_id
                if(foundGameByGame_id?.event_id==event_id){
                    copyObject.splice(foundGameByGameIdIndex,1);
                }else{
                    copyObject.splice(foundGameByGameIdIndex,1);
                    // now after we have removed the game matched with supplied event_id

                    //What next?lets add a new record
                    copyObject.push(argData);
                }
            }
        }

        if(!isGameByIdExistsInBetSlip(game_id)){
            // what now that a game does not exist?add new record
            copyObject.push(argData);
        }


        dispatch({
            type: "LOGGED",
            payload: {
                bet_slip:copyObject
            }
        });
    };


    /**
     *
     * @param {number} event_id
     */
    const isEventIdExistInBetSlip=(event_id)=>{
        return (bet_slip.find((val) => val?.event_id == event_id)) ? true : false;
    };

    /**
   *
   * @param {number} market_id
   */

    const isGameMarketIdExistInBetSlip = (market_id) => {
        //check the supplied market id from the betslip stored in context(local storage)
        return (bet_slip.find((val) => val?.market_id == market_id)) ? true : false;
    }

    /**
   *
   * @param {number} game_id
   */
    const isGameByIdExistsInBetSlip=(game_id)=>{
        return (bet_slip.find((val) => val?.game_id==game_id))?true:false;
    }

    /**
        *
        * @param {number} event_id
        * @param {number} market_id
        * @returns
        */
    const removeGameFromBetSlip = (event_id) => {

        //we remove the existing game
        const copyObject = [...bet_slip];
        const foundIndex = copyObject.findIndex((val) => val?.event_id == event_id);

        console.log({
            message: "removed game from slip event_id:"+event_id,
            data:copyObject[foundIndex ]
        });

        // remove the found object
        copyObject.splice(foundIndex, 1);

        //we update  the manipulated copy object of the betslip
        dispatch({
            type: "LOGGED",
            payload: {
                bet_slip: copyObject
            }
        });
        return;
    }

    return {
        onPressGameOddHighlighter,
        isGameMarketIdExistInBetSlip,
        isEventIdExistInBetSlip,
        removeGameFromBetSlip
    }
}

export default MarketHandlerUtilities
