import { main } from './';

describe('user faker timer inside test case function', () => {
  it('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    jest.useFakeTimers();
    main();
    jest.advanceTimersByTime(20000);
    expect(logSpy).toBeCalledWith('teresa teng');
    logSpy.mockRestore();
  });
});
