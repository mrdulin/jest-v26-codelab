import React from 'react';

const CountContext = React.createContext({
  count: 0,
  setCount: (c: number) => {},
});

export const CountProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>;
};

export const useCount = () => {
  const { count, setCount } = React.useContext(CountContext);
  React.useEffect(() => {
    return () => setCount(50);
  }, []);

  return { count, setCount };
};
