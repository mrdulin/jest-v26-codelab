import { throttle } from './throttle';

describe('65593662', () => {
  describe('throttle', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('should call function if now - last > delay', () => {
      const fn = jest.fn();
      const throttledFn = throttle(fn, 1000);
      const getTimeSpy = jest.spyOn(Date.prototype, 'getTime').mockReturnValue(2000);
      throttledFn('param');
      expect(fn).toBeCalledWith('param');
      expect(getTimeSpy).toBeCalledTimes(1);
    });

    it('should call function if now - last = delay', () => {
      const fn = jest.fn();
      const throttledFn = throttle(fn, 1000);
      const getTimeSpy = jest.spyOn(Date.prototype, 'getTime').mockReturnValue(1000);
      throttledFn('param');
      expect(fn).toBeCalledWith('param');
      expect(getTimeSpy).toBeCalledTimes(1);
    });

    it('should not call function if now - last < delay', () => {
      const fn = jest.fn();
      const throttledFn = throttle(fn, 1000);
      const getTimeSpy = jest.spyOn(Date.prototype, 'getTime').mockReturnValue(100);
      throttledFn('param');
      expect(fn).not.toBeCalled();
      expect(getTimeSpy).toBeCalledTimes(1);
    });
  });
});
