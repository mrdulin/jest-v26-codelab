import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export const TestContext = createContext<{
  stateVariable: number;
  setStateVariable: Dispatch<SetStateAction<number>>;
}>(null!);

export default function TestContextProvider({ children }) {
  const [stateVariable, setStateVariable] = useState(1);
  return <TestContext.Provider value={{ stateVariable, setStateVariable }}>{children}</TestContext.Provider>;
}
