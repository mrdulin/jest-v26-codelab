import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Component } from '.';

describe('68222837', () => {
  it('element exists', function () {
    render(<Component />);
    let el = screen.getByTestId('toBeClick');
    expect(el).toBeInTheDocument();
  });

  it('element Click', function () {
    jest.useFakeTimers();
    let syncClick = jest.fn();
    let asyncClick = jest.fn();
    render(<Component asyncClick={asyncClick} syncClick={syncClick} />);
    let el = screen.getByTestId('toBeClick');
    fireEvent.click(el);
    expect(syncClick).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500000);
    expect(asyncClick).toHaveBeenCalledTimes(1);
  });
});
