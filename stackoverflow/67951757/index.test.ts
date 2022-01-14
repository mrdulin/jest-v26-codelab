const mc = {
  on: jest.fn(),
  list: jest.fn(),
  end: jest.fn(),
  connect: jest.fn(),
};
jest.mock('ftp', () => {
  return jest.fn(() => mc);
});

describe('67951757', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should handle ready', async () => {
    mc.on.mockImplementation(function (event, handler) {
      if (event === 'ready') {
        handler();
      }
      return mc;
    });
    mc.list.mockImplementation((callback) => {
      callback(null as any, []);
    });
    await import('./');
    expect(mc.on).toBeCalledWith('ready', expect.any(Function));
    expect(mc.on).toBeCalledWith('error', expect.any(Function));
    expect(mc.connect).toBeCalledTimes(1);
    expect(mc.list).toBeCalledWith(expect.any(Function));
    expect(mc.end).toBeCalledTimes(1);
  });

  it('should handle list error', async () => {
    mc.on.mockImplementation(function (event, handler) {
      if (event === 'ready') {
        handler();
      }
      return mc;
    });
    mc.list.mockImplementation((callback) => {
      callback(new Error('memory leak'));
    });
    await expect(() => import('./')).rejects.toThrow('memory leak');
    expect(mc.on).toBeCalledWith('ready', expect.any(Function));
    expect(mc.list).toBeCalledWith(expect.any(Function));
    expect(mc.end).not.toBeCalled();
  });

  it('should handle error', async () => {
    mc.on.mockImplementation(function (event, handler) {
      if (event === 'error') {
        handler();
      }
      return mc;
    });
    mc.list.mockImplementation((callback) => {
      callback(null as any, []);
    });
    const logSpy = jest.spyOn(console, 'log');
    await import('./');
    expect(mc.on).toBeCalledWith('error', expect.any(Function));
    expect(mc.list).not.toBeCalled();
    expect(logSpy).toBeCalledWith('handle error');
    logSpy.mockRestore();
  });
});
