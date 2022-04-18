import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { App } from './app';
import { ThemeContext } from './theme-provider';

describe('71901699', () => {
  test('should pass', async () => {
    const defaultTheme = 'light';
    const themeContext = {
      activeTheme: defaultTheme,
      changeTheme: jest.fn().mockImplementation((newTheme) => {
        themeContext.activeTheme = newTheme;
      }),
    };

    render(
      <ThemeContext.Provider value={themeContext}>
        <App />
      </ThemeContext.Provider>
    );
    const themeButton = screen.getByTestId('app-theme-btn1');
    userEvent.click(themeButton);
    expect(themeContext.changeTheme).toHaveBeenCalledTimes(1);
    await waitFor(() => screen.queryByText('Active Theme: dark'));
  });
});
