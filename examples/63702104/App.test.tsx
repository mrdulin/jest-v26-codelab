import React, { useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import App from './App';

jest.mock('react', () => {
  return {
    ...jest.requireActual<typeof React>('react'),
    useRef: jest.fn(),
  };
});

const useMockRef = mocked(useRef);

describe('63702104', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should pass', () => {
    const ref = { current: {} };
    const mScrollBy = jest.fn();
    Object.defineProperty(ref, 'current', {
      set(_current) {
        if (_current) {
          _current.scrollBy = mScrollBy;
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValueOnce(ref);
    render(<App />);
    fireEvent.click(screen.getByText(/click/i));
    expect(mScrollBy).toBeCalledWith({ top: 0, left: 100 });
  });
});
