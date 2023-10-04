'use client';
import React, {useState, createContext} from 'react'

export const AppContext = createContext({
    sidebarExpanded: false,
    toggleSidebarExpanded: () => {},
})

const AppContextProvider = ({children}) => {
    const [sidebarExpanded, setSidebarExpanded ] = useState(false)

    const toggleSidebarExpanded = () => {
        setSidebarExpanded(prev => !prev)
    }

  return (
    <AppContext.Provider value={{
        sidebarExpanded,
        toggleSidebarExpanded,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
