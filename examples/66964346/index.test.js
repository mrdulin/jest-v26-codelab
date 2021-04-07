const { testFunction } = require('./index');

describe('testFunction', () => {
  it('should be called mockCallback and readAsText with the blob value', () => {
    const mockCallback = jest.fn();
    const fileReader = {
      readAsText: jest.fn(),
    };
    let onloadRef;
    Object.defineProperty(fileReader, 'onload', {
      get() {
        return this._onload;
      },
      set(onload) {
        onloadRef = onload;
        this._onload = onload;
      },
    });
    jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);
    const uintArray = new Uint8Array();
    testFunction(uintArray, mockCallback);

    // onload test
    const event = { target: { result: 'teresa teng' } };
    onloadRef(event);
    expect(mockCallback).toBeCalledWith('teresa teng');
    expect(fileReader.readAsText).toBeCalledWith(new Blob([uintArray]));
  });
});
