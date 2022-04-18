import React, { useState } from 'react';

const defaultContext = {
  activeTheme: 'light',
  changeTheme: (newTheme: string) => {},
};
export const ThemeContext = React.createContext(defaultContext);

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(defaultContext.activeTheme);
  const changeTheme = (newTheme: string) => {
    setActiveTheme(newTheme);
  };
  return <ThemeContext.Provider value={{ activeTheme, changeTheme }}>{children}</ThemeContext.Provider>;
};
