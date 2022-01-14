import { renderHook } from '@testing-library/react-hooks';
import { useInterval } from './useInterval';

describe('70276930', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test('should call callback interval', () => {
    const callback = jest.fn();
    const { result } = renderHook(useInterval);
    result.current.set(callback, 100);
    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalledTimes(10);
  });

  test('should clear interval', () => {
    const callback = jest.fn();
    const { result } = renderHook(useInterval);
    result.current.set(callback, 100);
    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(1);
    result.current.clear();
    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(1);
  });
});
