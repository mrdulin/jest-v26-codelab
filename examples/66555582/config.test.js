describe('Environment variables', () => {
  const ORIGINAL_ENV = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it('production does not use dev tools', () => {
    process.env = { NODE_ENV: 'production' };
    console.log(process.env.NODE_ENV);
    const config = require('./config').default;

    expect(config.USE_DEV_TOOLS).toBe(false);
  });
});
