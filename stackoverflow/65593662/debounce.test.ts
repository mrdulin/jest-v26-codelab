import { debounce } from './debounce';

jest.useFakeTimers();

describe('65593662', () => {
  describe('debounce', () => {
    it('should call function if timeoutID is undefined', () => {
      const fn = jest.fn();

      const debouncedFn = debounce(fn, 1000);
      debouncedFn('param');
      jest.advanceTimersByTime(1000);
      expect(fn).toBeCalledWith('param');
      expect(fn).toBeCalledTimes(1);
    });

    it('should not call function once if timeoutID exists', () => {
      const fn = jest.fn();

      const debouncedFn = debounce(fn, 1000);
      debouncedFn('param');
      debouncedFn('param');
      debouncedFn('param');
      jest.runAllTimers();
      expect(fn).toBeCalledWith('param');
      expect(fn).toBeCalledTimes(1);
    });
  });
});
