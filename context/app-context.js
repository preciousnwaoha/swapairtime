'use client';
import React, {useState, createContext, useContext} from 'react'

export const AppContext = createContext({
    sidebarExpanded: false,
    showBalance: true,
    toggleSidebarExpanded: () => {},
})

const AppContextProvider = ({children}) => {
    const [sidebarExpanded, setSidebarExpanded ] = useState(false)
    const [showBalance, setShowBalance ] = useState(true)

    const toggleShowBalance = () => {
        setShowBalance(prev => !prev)
    }

    const toggleSidebarExpanded = () => {
        setSidebarExpanded(prev => !prev)
    }

  return (
    <AppContext.Provider value={{
        sidebarExpanded,
        toggleSidebarExpanded,
        toggleShowBalance,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)