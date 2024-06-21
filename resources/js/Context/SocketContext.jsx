import { createContext,useReducer,useEffect} from "react";

// initial state
const initialState={
    socket:(localStorage.getItem("socket")!=undefined)?localStorage.getItem("socket"):{},
};

// create context for the app
export const socketContext = createContext(initialState);

const socketContextReducer = (state, action) => {
    switch (action.type) {
        case "SOCKETLOGGED":{
            return { socket:action.payload.socket}
        }
        default:
         return state;
    }
};

export const SocketContextProvider=({children})=>{
    const [state,dispatch] = useReducer(socketContextReducer,initialState);
    //initialize the local storage
    useEffect(()=>{
        localStorage.setItem("socket",state.socket);
    },[state]);

    return <socketContext.Provider
        value={{
            socket:state.socket,
            dispatch
        }}
    >
        {children}
    </socketContext.Provider>
};
