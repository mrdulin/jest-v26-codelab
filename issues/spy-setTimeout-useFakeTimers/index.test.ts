import { main } from '.';

describe('test suites', () => {
  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    main();
    expect(setTimeoutSpy).toBeCalledWith(expect.any(Function), 100);
    jest.advanceTimersByTime(100);
    expect(logSpy).toBeCalledWith('teresa teng');
  });

  // https://stackoverflow.com/questions/66594725/spy-on-settimeout-but-its-not-to-be-called-as-expected
  it('should pass too', () => {
    const logSpy = jest.spyOn(console, 'log');
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    jest.useFakeTimers();
    main();
    expect(setTimeoutSpy).toBeCalledWith(expect.any(Function), 100);
    jest.advanceTimersByTime(100);
    expect(logSpy).toBeCalledWith('teresa teng');
  });
});
