describe('Config', () => {
  let Config;
  beforeEach(() => {
    jest.resetModules();
  });
  test('returns correct data if NODE_ENV is development', () => {
    process.env = { ...process.env, NODE_ENV: 'development' };
    Config = require('./config').Config;
    expect(Config.data).toBe('123');
  });

  test('returns correct data if NODE_ENV is production', () => {
    process.env = { ...process.env, NODE_ENV: 'production' };
    Config = require('./config').Config;
    expect(Config.data).toBe('456');
  });
});
