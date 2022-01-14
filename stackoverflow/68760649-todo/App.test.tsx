import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
describe('68760649', () => {
  test('Check the text "Log out" is eventually there', () => {
    render(<App />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const LoginButton = screen.getByText(/Log/);
    expect(LoginButton).toHaveTextContent(/Log Out/i);
  });

  test('Check the text "Log out" is eventually there - 2', async () => {
    render(<App />);
    //   await act(async () => {
    await waitFor(() => {
      screen.getByText(/Log/);
    });
    //   });
    expect(screen.getByText(/Log/)).toHaveTextContent(/Log Out/i);
  });
});
