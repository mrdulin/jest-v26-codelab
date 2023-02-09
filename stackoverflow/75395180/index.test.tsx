import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { AwaitAsync } from '.';

describe('Async Await', () => {
  it('Async Await Test', async () => {
    jest.useFakeTimers();
    render(<AwaitAsync />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('abc')).toHaveTextContent('Data after 4 secons');
  });
});
