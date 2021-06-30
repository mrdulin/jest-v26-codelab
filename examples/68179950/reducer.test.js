describe('68179950', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('should return dynamic RESET_TYPE', () => {
    jest.doMock('./functions', () => ({
      getActionTypeName: jest.fn().mockReturnValueOnce('RUNTIME_RESET_TYPE'),
    }));
    const { buttonReducer } = require('./reducer');
    const actual = buttonReducer({}, { type: 'RUNTIME_RESET_TYPE' });
    expect(actual).toEqual({ name: 'John', a: 'a' });
  });

  it('should return dynamic FETCH_TYPE', () => {
    jest.doMock('./functions', () => ({
      getActionTypeName: jest.fn().mockReturnValueOnce('RUNTIME_RESET_TYPE').mockReturnValueOnce('RUNTIME_FETCH_TYPE'),
    }));
    const { buttonReducer } = require('./reducer');
    const actual = buttonReducer({}, { type: 'RUNTIME_FETCH_TYPE' });
    expect(actual).toEqual({ name: 'John', b: 'b' });
  });

  it('should return dynamic SHOW_TYPE', () => {
    jest.doMock('./functions', () => ({
      getActionTypeName: jest
        .fn()
        .mockReturnValueOnce('RUNTIME_RESET_TYPE')
        .mockReturnValueOnce('RUNTIME_FETCH_TYPE')
        .mockReturnValueOnce('RUNTIME_SHOW_TYPE'),
    }));
    const { buttonReducer } = require('./reducer');
    const actual = buttonReducer({}, { type: 'RUNTIME_SHOW_TYPE' });
    expect(actual).toEqual({ name: 'John', c: 'c' });
  });
});
