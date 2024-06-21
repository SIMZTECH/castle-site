import { isNil } from "lodash";
import {createContext,useReducer,useEffect} from "react";

//initial state
const initialState={
    storeSwarmData:(isNil(localStorage.getItem("swarmData")))?{}:JSON.parse(localStorage.getItem("swarmData"))
};

// create context for the app
export const SwarmDataContext = createContext(initialState);

const swarmDataContextReducer = (state, action) => {
    switch (action.type) {
        case "SWARMLOGGED": {
            return {
                storeSwarmData:action.payload.storeSwarmData,
            };
        }
        default:{
            return state;
        }
    }
};

export const SwarmContextProvider=({children})=>{
    const [state,dispatch] = useReducer(swarmDataContextReducer,initialState);

    useEffect(()=>{
        localStorage.setItem("swarmData",JSON.stringify(state));
    },[state]);


    return <SwarmDataContext.Provider
        value={{
            storeSwarmData:state.storeSwarmData,
            dispatch
        }}
    >
        {children}
    </SwarmDataContext.Provider>
};
