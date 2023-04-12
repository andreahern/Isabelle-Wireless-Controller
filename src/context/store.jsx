'use client';

import  {createContext, useContext, Dispatch, useState} from 'react';

const GlobalContext = createContext({
    ros: null,
    setRos: () => null,
    isConnected: false,
    setIsConnected: () => false
})

export const GlobalContextProvider = ({ children  }) => {
    const [ros, setRos] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    return (
        <GlobalContext.Provider value={{ros, setRos, isConnected, setIsConnected}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);