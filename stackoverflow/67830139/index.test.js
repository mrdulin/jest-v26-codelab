describe('index', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('returns right value', () => {
    const { add5thenMultiply2 } = require('./index');
    const input = 3;
    const expected = 16;
    const result = add5thenMultiply2(input);
    expect(result).toEqual(expected);
  });

  it('works with mock', () => {
    jest.doMock('./helper', () => {
      return {
        ...jest.requireActual('./helper'),
        add: jest.fn().mockReturnValue(100),
      };
    });
    const { add5thenMultiply2 } = require('./index');
    const input = 3;
    const expected = 200;
    const result = add5thenMultiply2(input);
    expect(result).toEqual(expected);
  });
});
