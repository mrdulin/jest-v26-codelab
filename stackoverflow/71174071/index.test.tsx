import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Message } from './';

describe('Message', () => {
  const mockMessage = {
    text: 'this is a message',
    answers: [],
    id: 1,
  };

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should show message after setTimeout', () => {
    jest.useFakeTimers();
    render(<Message message={mockMessage} />);
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const message = screen.getByText(/this is a message/i);
    expect(message).toBeInTheDocument();
  });
});
