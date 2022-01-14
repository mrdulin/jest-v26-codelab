const EventEmitter = require('events').EventEmitter;
const main = require('./testevent');

describe('67162806', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('should emit connected event', () => {
    jest.useFakeTimers();
    const logSpy = jest.spyOn(console, 'log');
    const onSpy = jest.spyOn(EventEmitter.prototype, 'on');
    const nowSpy = jest.spyOn(Date, 'now').mockReturnValueOnce(1);
    main();
    jest.advanceTimersByTime(100);
    expect(nowSpy).toBeCalledTimes(1);
    expect(onSpy).toBeCalledWith('connected', expect.any(Function));
    expect(onSpy).toBeCalledWith('error', expect.any(Function));
    expect(logSpy).toBeCalledWith('connected');
  });

  it('should emit error event', () => {
    jest.useFakeTimers();
    const logSpy = jest.spyOn(console, 'log');
    const onSpy = jest.spyOn(EventEmitter.prototype, 'on');
    const nowSpy = jest.spyOn(Date, 'now').mockReturnValueOnce(2);
    main();
    jest.advanceTimersByTime(100);
    expect(nowSpy).toBeCalledTimes(1);
    expect(onSpy).toBeCalledWith('connected', expect.any(Function));
    expect(onSpy).toBeCalledWith('error', expect.any(Function));
    expect(logSpy).toBeCalledWith('error');
  });
});
