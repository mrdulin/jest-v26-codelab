import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import NewForm from './NewForm';

describe('75915189', () => {
  it('should pass', async () => {
    jest.useFakeTimers();
    render(<NewForm />);
    act(() => {
      jest.advanceTimersByTime(1000);
    })
    const divText = await screen.findByText(/div/i);
    expect(divText).toBeInTheDocument();
  });
});
