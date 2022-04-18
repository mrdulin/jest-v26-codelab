import React, { useContext, useState } from 'react';
import { ThemeContext } from './theme-provider';

export const App = (): JSX.Element => {
  const { changeTheme, activeTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState<string>(activeTheme);

  const setNewTheme = (newTheme: string) => {
    changeTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <h1>Project Name</h1>
      <button
        data-testid="app-theme-btn1"
        onClick={() => {
          setNewTheme('dark');
        }}
      >
        Click here
      </button>
      <p>{`Active Theme: ${theme}`}</p>
    </div>
  );
};
