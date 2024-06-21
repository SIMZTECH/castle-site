import { createContext,useReducer,useEffect} from "react";

// initial state
const initialState={
    bet_slip:(localStorage.getItem("bet_slip")!=undefined)?JSON.parse(localStorage.getItem("bet_slip")):[],
};

// create context for the app
export const betSlipContext = createContext(initialState);

const betSlipContextReducer = (state, action) => {
    switch (action.type) {
        case "LOGGED":{
            return { bet_slip:action.payload.bet_slip}
        }
        case "CLEARBETSLIP":{
            return { bet_slip:action.payload.bet_slip}
        }
        default:
         return state;
    }
};

export const BetSlipContextProvider=({children})=>{
    const [state,dispatch] = useReducer(betSlipContextReducer,initialState);
    //initialize the local storage
    useEffect(()=>{
        localStorage.setItem("bet_slip",JSON.stringify(state.bet_slip));
    },[state]);

    return <betSlipContext.Provider
        value={{
            bet_slip:state.bet_slip,
            dispatch
        }}
    >
        {children}
    </betSlipContext.Provider>
};
