import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import FAB from './FAB';

describe('71867883', () => {
  it('should show message after setTimeout', async () => {
    jest.useFakeTimers();
    render(<FAB />);
    act(() => {
      jest.advanceTimersByTime(5000);
    })
    await waitFor(() => expect(screen.queryByText(/this/i)).toBeInTheDocument());
  });
});
