import { renderHook, act } from '@testing-library/react-hooks';
import { useName } from './useName';
import React from 'react';

jest.mock('react', () => {
  return { ...(jest.requireActual('react') as any), useState: jest.fn() };
});

describe.only('70381825 - mock way', () => {
  test('should pass', () => {
    const setState = jest.fn();
    (React.useState as jest.MockedFunction<typeof React.useState>).mockReturnValue(['ignore', setState]);
    const { result } = renderHook(() => {
      console.count('render');
      return useName();
    });
    act(() => {
      result.current.setName('a', 'b');
    });
    expect(result.current.name).toBe('ignore');
    expect(setState).toBeCalled();
    act(() => {
      result.current.setName('c', 'd');
    });
  });
});

describe('70381825', () => {
  test('should pass', () => {
    const { result } = renderHook(() => {
      console.count('render');
      return useName();
    });
    expect(result.current.name).toBe('');
    act(() => {
      result.current.setName('Kashif', 'Nazar');
    });
    expect(result.current.name).toBe('Kashif Nazar');
    act(() => {
      result.current.setName('a', 'b');
    });
  });
});
