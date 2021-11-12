import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './';

jest.setTimeout(5 * 1000);

describe('waitForNextUpdate  V.S. jest-advancedTimersByTime', () => {
  test('should pass by using jest.advancedTimersByTime', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useCounter());
    result.current.incrementAsync();
    act(() => {
      jest.advanceTimersByTime(1000 * 10);
    });
    expect(result.current.count).toBe(1);
    jest.useRealTimers();
  });

  test('should pass by using waitForNextUpdate', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter());
    result.current.incrementAsync();
    await waitForNextUpdate();
    expect(result.current.count).toBe(1);
  });
});
