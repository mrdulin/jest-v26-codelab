import { render, screen, act } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('68460159', () => {
  test('renders learn react link', async () => {
    jest.useFakeTimers();
    render(<App />);
    act(() => {
      jest.advanceTimersByTime(1000 * 10);
    });
    const movieTiles = screen.getAllByTestId('movies');
    expect(movieTiles).toHaveLength(2);
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
