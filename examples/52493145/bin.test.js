const logger = require('./logger');

describe('52493145', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('catches unhandled rejections', () => {
    const error = new Error('mock error');
    jest.spyOn(process, 'on').mockImplementation((event, handler) => {
      if (event === 'unhandledRejection') {
        handler(error);
      }
    });
    jest.spyOn(logger, 'error').mockReturnValueOnce();
    require('./bin');
    expect(process.on).toBeCalledWith('unhandledRejection', expect.any(Function));
    expect(logger.error).toHaveBeenCalledWith(error);
  });

  test('catches uncaught exceptions', () => {
    const error = new Error('mock error');
    jest.spyOn(process, 'on').mockImplementation((event, handler) => {
      if (event === 'uncaughtException') {
        handler(error);
      }
    });
    jest.spyOn(logger, 'error').mockReturnValueOnce();
    require('./bin');
    expect(process.on).toBeCalledWith('uncaughtException', expect.any(Function));
    expect(logger.error).toHaveBeenCalledWith(error);
  });
});
