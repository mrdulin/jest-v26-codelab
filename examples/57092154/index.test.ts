import { funcToTest } from './';

describe('57092154', () => {
  let onloadRef: Function | undefined;
  let onerrorRef: Function | undefined;
  beforeAll(() => {
    Object.defineProperty(Image.prototype, 'onload', {
      get() {
        return this._onload;
      },
      set(onload: Function) {
        onloadRef = onload;
        this._onload = onload;
      },
    });
    Object.defineProperty(Image.prototype, 'onerror', {
      get() {
        return this._onerror;
      },
      set(onerror: Function) {
        onerrorRef = onerror;
        this._onerror = onerror;
      },
    });
  });
  it('should handle onload event', () => {
    const callback = jest.fn();
    funcToTest('./test.png', callback);
    onloadRef!();
    expect(callback).toBeCalledWith(true);
  });

  it('should handle onerror event', () => {
    const callback = jest.fn();
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => 'suppress error');
    funcToTest('./test.png', callback);
    const mErr = new Error('network');
    onerrorRef!(mErr);
    expect(callback).toBeCalledWith(false);
    expect(logSpy).toBeCalledWith(mErr);
  });
});
