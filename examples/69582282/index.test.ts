import { createRAF } from './';

describe('69582282', () => {
  test('should pass', () => {
    const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(Date.now());
      return Math.random();
    });
    const callback = jest.fn();
    createRAF(callback);
    expect(callback).toBeCalledTimes(1);
    expect(requestAnimationFrameSpy).toBeCalledTimes(1);
    requestAnimationFrameSpy.mockRestore();
  });
});
