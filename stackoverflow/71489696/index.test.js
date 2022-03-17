jest.mock('dotenv', () => ({ config: jest.fn() }), { virtual: true });

describe('71489696', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('should throw error if AUTH0_AUDIENCE environment variable does not exist', () => {
    expect(() => require('.')).toThrowError(
      '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
    );
  });

  test('should throw error if AUTH0_DOMAIN environment variable does not exist', () => {
    process.env.AUTH0_AUDIENCE = 'test_audience';
    expect(() => require('.')).toThrowError('.env is missing the definition of an AUTH0_DOMAIN environmental variable');
    delete process.env.AUTH0_AUDIENCE;
  });

  test('should export environment variables', () => {
    process.env.AUTH0_AUDIENCE = 'test_audience';
    process.env.AUTH0_DOMAIN = 'test_domain';
    expect(require('.')).toEqual({ audience: 'test_audience', domain: 'test_domain' });
    delete process.env.AUTH0_AUDIENCE;
    delete process.env.AUTH0_DOMAIN;
  });
});
