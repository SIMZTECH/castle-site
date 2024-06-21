import { createContext,useReducer,useEffect} from "react";

// initial state
const stateConstruct={
    auth_token:null,
    balance:null,
    deposit_count:null,
    is_new_client:null,
    qr_code_origin:null
};


const initialState={
    authUser:(localStorage.getItem("authUser")!=undefined)?JSON.parse(localStorage.getItem("authUser")):stateConstruct,
};

// create context for the app
export const authUserContext = createContext(initialState);

const authUserContextReducer = (state, action) => {
    switch (action.type) {
        case "AUTHUSERUNLOGGED":{//LOGOUT USER
            return {
                authUser: {
                    auth_token: null,
                    balance: null,
                    deposit_count: null,
                    is_new_client: null,
                    qr_code_origin: null,
                },
            };
        }
        case "AUTHUSERLOGGED":{//LOGIN USER
            return {authUser:action.payload.authUser}
        }
        default:
         return state;
    }
};

export const AuthUserContextProvider=({children})=>{
    const [state,dispatch] = useReducer(authUserContextReducer,initialState);
    //initialize the local storage
    useEffect(()=>{
        localStorage.setItem("authUser",JSON.stringify(state.authUser));
    },[state]);

    return <authUserContext.Provider
        value={{
            authUser:state.authUser,
            dispatch
        }}
    >
        {children}
    </authUserContext.Provider>
};
