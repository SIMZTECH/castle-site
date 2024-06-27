// here falls the utilized hooks




export default function UtilizedHooks(){

    // place bet hook
      /**
     *
     * @param {number} stakeAmount
     * @param {[]} bets
     * @param {WebSocket} socket
     */
      const placeBetRequest = (stakeAmount, bets,socket) => {
        /**
         * @var betsArray[]
         */
        const betsArray = [];

        bets.map((el) => {
            betsArray.push({
                event_id: el?.event_id,
                price: el?.market_price,
            });
        });

        const query = {
            command: "do_bet",
            params: {
                type: betsArray.length > 1 ? 2 : 1, //1:single bet,3:system bet
                mode: 0,
                amount: stakeAmount,
                odd_type: 0,
                bets: betsArray,
                // sys_bet: 2, //user expects 2 or 3 variants to win
            },
            rid: "5", //unique id
        };

        socket.send(JSON.stringify(query));
        console.log(query,"am about to send request sir....");
    };

    // get single game details hook
    /**
 *
 * @param {{
    * game_id:number,
    * competition_id:number,
    * region_id:number
 *}} arg
 @param {WebSocket} socket
 */
const getSingleGameDetails=(arg,socket)=>{//get match scores by gamed id
    const {game_id,region_id,competition_id}=arg;

    const query = {
        command: "get",
        params: {
            source: "betting",
            what: {
                //selector
                game: [
                    "info",
                    "id",
                    "team1_name",
                    "team2_name",
                    "start_ts",
                    "markets_count",
                    "strong_team",
                    "type",
                    "live_events",
                ],
                market: [],
                event: [], //list of all games under
            },
            where: {
                //filter on selected
                competition: { id: competition_id },
                region: { id: region_id },
                game: { id: game_id },
                market: {},
            },
        },
        rid: "18",
    };

    console.log(query,"i have requested for single game details of game_id"+game_id);
    socket.send(JSON.stringify(query));
};

/**
* @param {{
* username:string,
* password:string,
* confirmPassword:string,
* agreement:boolean
* }} formData
* @param {WebSocket} socket
*/
const registerUser=(formData,socket)=>{
    const {password,username}=formData;
    const query = {
        command: "register_user",
        params: {
            user_info: {
                username: username,
                password: password,
                currency_name: "ZMW",
                lang_code: "arm",
                country_code: "ZM",
            },
        },
        rid: "11",
    };
    socket.send(JSON.stringify(query));
    console.log(query,"i have sent the register request");
};

    return {
        placeBetRequest,
        getSingleGameDetails,
        registerUser
    }

};