const calc = require('./calculate');

describe('57941350', () => {
  it('should return an error if string is undefined', () => {
    const actual = calc(undefined);
    expect(actual).toBeInstanceOf(Error);
    expect(actual.message).toBe('String not defined.');
  });
  it('should calculate the result with default block size in bits', () => {
    const testString = 'a'.repeat(32);
    const actual = calc(testString);
    expect(actual).toEqual(testString + '\u0000'.repeat(31) + ' ');
  });
  it('should calculate the result with passed block size in bits', () => {
    const testString = 'a';
    const actual = calc(testString, 1);
    expect(actual).toEqual('a\u0001');
  });
});
