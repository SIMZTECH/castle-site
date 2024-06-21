import { createContext, useState } from "react";


export const eventsContext=createContext(null);


export const EventContextProvider=({children})=>{
    const [pressBetEvent,setPressBetEvent]=useState(false);
    const [loginEvent,setLoginEvent]=useState(false);

    return (
        <eventsContext.Provider value={{
            pressBetEvent,
            setPressBetEvent,
            loginEvent,
            setLoginEvent
        }}>
            {children}
        </eventsContext.Provider>


    );
}
