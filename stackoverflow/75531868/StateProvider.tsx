import React, { createContext, Reducer, useContext, useReducer } from 'react';
import { IInitialStateContext } from './reducer';

interface StateProvierProps {
  reducer: Reducer<any, any>;
  initialState: IInitialStateContext;
  children: React.ReactNode;
}

type IStateContext = [IInitialStateContext, ({ type }: { type: string }) => void];

export const StateContext = createContext({} as IStateContext);

export const StateProvider = ({ reducer, initialState, children }: StateProvierProps) => {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
};
export const useStateValue = () => useContext(StateContext);
