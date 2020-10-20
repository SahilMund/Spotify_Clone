import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//   creating our custom hook which helps to acces the context
export const useStateValue = () => useContext(StateContext);
