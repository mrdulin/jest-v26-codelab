import { hashHandler } from './urlHashChangeListener';

describe('urlHashChangeListener', () => {
  const setupHashListeners = hashHandler();

  it('hashChangeCallback should be called when hash changed if listener is added', () => {
    const logSpy = jest.spyOn(console, 'log');
    setupHashListeners.add();

    window.dispatchEvent(
      new HashChangeEvent('hashchange', {
        oldURL: 'http://test.com/test.html#hash123',
        newURL: 'http://test.com/test.html#hash3',
      })
    );

    expect(logSpy).toBeCalledWith('event', 'http://test.com/test.html#hash123');
    logSpy.mockRestore();
  });
});
