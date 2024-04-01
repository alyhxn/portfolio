"use client"

import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

export function ContextProvider({children}){
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <StateContext.Provider value={{
      activeSearch,
      setActiveSearch
      }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);