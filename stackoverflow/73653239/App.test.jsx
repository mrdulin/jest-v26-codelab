import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

import useCustomHook from './useHook';

jest.mock('./useHook', () => ({
  __esModule: true,
   // It should be
   default: jest.fn(() => [false, jest.fn()]),

   // NOT
   // default: () => [false, jest.fn()]
}));

describe('testing App state', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render false when state is false', () => {
    render(<App />);
    expect(screen.queryByText(/false/i)).toBeInTheDocument();
  });
  it('should render true when state is true', () => {
    useCustomHook.mockImplementation(() => [true, jest.fn()]);
    render(<App />);
    expect(screen.queryByText(/true/i)).toBeInTheDocument();
  });
});
