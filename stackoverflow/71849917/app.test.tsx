// import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

// const mockEmitter = jest.fn();
// jest.mock('socket.io-client', () => {
//   return jest.fn(() => ({
//     emit: mockEmitter,
//     on: jest.fn(),
//   }));
// });

describe('Join', () => {
  let mockEmitter = jest.fn();
  let App;
  beforeEach(() => {
    App = require('./app').default;
    jest.mock('socket.io-client', () => {
      const mockedSocket = {
        emit: mockEmitter,
        on: jest.fn(),
      };
      return jest.fn(() => mockedSocket);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('joins a chat', () => {
    // Arrange
    render(<App />);
    const btn = screen.getByTestId('join-button');

    // Act
    fireEvent.click(btn);

    // Assert
    expect(btn).toBeInTheDocument();
    expect(fakeEmitter).toHaveBeenCalled();
  });
});
