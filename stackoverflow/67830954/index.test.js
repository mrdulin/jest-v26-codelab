describe.only('greeting', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('greet', () => {
    const { greet } = require('./index');
    const greetMsg = greet('test');
    expect(greetMsg).toBe('Welcome test');
  });

  it('should pass', () => {
    jest.doMock('yargs');
    jest.doMock('yargs/helpers');
    const yargs = require('yargs');
    const { hideBin } = require('yargs/helpers');
    const mArgv = {
      command: jest.fn().mockImplementation(function (command, description, builder, handler) {
        builder(this);
        handler({ name: 'teresa teng' });
        return this;
      }),
      argv: {},
      positional: jest.fn(),
    };
    yargs.mockReturnValueOnce(mArgv);
    require('./');
    expect(hideBin).toBeCalled();
    expect(yargs).toBeCalled();
    expect(mArgv.positional).toBeCalledWith('name', { describe: 'Your name', type: 'string' });
  });
});
