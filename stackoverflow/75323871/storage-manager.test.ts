import { CookiesManager, a, b } from './storage-manager';

jest.mock('./storage-manager', () => {
  const originalModules = jest.requireActual('./storage-manager');
  class CookiesManagerMock {
    static get = jest.fn();
    static set = jest.fn();
    static remove = jest.fn();
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
    expect(a()).toBe('a');
    expect(b()).toBe('b');
  });
});
