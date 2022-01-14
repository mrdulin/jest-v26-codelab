const unhandledErrors = require('./unhandledErrors');

describe('65386298', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should handle uncaughtException', () => {
    const mError = new Error('Server internal error');
    jest.spyOn(process, 'on').mockImplementation((event, handler) => {
      if (event === 'uncaughtException') {
        handler(mError);
      }
    });
    jest.spyOn(console, 'error').mockReturnValueOnce();
    jest.spyOn(process, 'exit').mockReturnValueOnce();
    unhandledErrors();
    expect(process.on).toBeCalledWith('uncaughtException', expect.any(Function));
    expect(process.exit).toBeCalledWith(1);
    expect(console.error).toBeCalledWith('Server internal error');
  });

  it('should handle unhandledRejection', () => {
    const mError = new Error('dead lock');
    jest.spyOn(process, 'on').mockImplementation((event, handler) => {
      if (event === 'unhandledRejection') {
        handler(mError);
      }
    });
    expect(() => unhandledErrors()).toThrowError('dead lock');
    expect(process.on).toBeCalledWith('unhandledRejection', expect.any(Function));
  });
});
