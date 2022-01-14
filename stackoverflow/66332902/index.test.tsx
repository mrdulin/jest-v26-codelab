import { render } from '@testing-library/react';
import React, { useRef } from 'react';
import { mocked } from 'ts-jest/utils';
import App from './';

jest.mock('react', () => {
  return {
    ...jest.requireActual<typeof React>('react'),
    useRef: jest.fn(),
  };
});

const useMockRef = mocked(useRef);

describe('66332902', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should mock ref and offsetWidth', () => {
    const ref = { current: {} };
    Object.defineProperty(ref, 'current', {
      set(_current) {
        if (_current) {
          jest.spyOn(_current, 'offsetWidth', 'get').mockReturnValueOnce(100);
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValueOnce(ref);
    render(<App />);
  });
});
