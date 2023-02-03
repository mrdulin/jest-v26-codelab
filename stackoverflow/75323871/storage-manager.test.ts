import { CookiesManager, a, b } from './storage-manager';

jest.mock('./storage-manager', () => {
  const originalModules = jest.requireActual('./storage-manager');

  const mockCookies = {};
  class CookiesManagerMock {
    static set = jest.fn().mockImplementation((key, value, config) => {
      console.log('Mock set called');
      mockCookies[key] = value;
    });

    static get = jest.fn().mockImplementation((key) => {
      console.log('Mock get called');
      return mockCookies[key];
    });

    static remove = jest.fn().mockImplementation((key, config) => {
      console.log('Mock remove called');
      delete mockCookies[key];
    });
  }
  return {
    ...originalModules,
    CookiesManager: CookiesManagerMock,
  };
});

describe('75323871', () => {
  test('It should set a cookie', () => {
    const config = { path: '/', maxAge: 1800 };
    expect(jest.isMockFunction(CookiesManager.set)).toBeTruthy();
    CookiesManager.set('test_key', 'test_value', config);
    expect(CookiesManager.set).toHaveBeenCalledWith('test_key', 'test_value', config);
    expect(CookiesManager.get('test_key')).toBe('test_value');

    // other named exports
    expect(a()).toBe('a');
    expect(b()).toBe('b');
  });
});
