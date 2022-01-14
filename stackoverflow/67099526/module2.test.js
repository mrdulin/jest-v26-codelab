describe('67099526', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should initialize module1 correctly', () => {
    const module1instance = { init: jest.fn() };
    jest.doMock('./module1', () => {
      return module1instance;
    });
    require('./module2');
    expect(module1instance.init).toBeCalledTimes(1);
  });

  it('should handle error', () => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();
    const module1instance = {
      init: jest.fn().mockImplementationOnce(() => {
        throw new Error('initialize module1');
      }),
    };
    jest.doMock('./module1', () => {
      return module1instance;
    });
    require('./module2');
    expect(module1instance.init).toBeCalledTimes(1);
    expect(exitSpy).toBeCalledWith(1);
  });
});
