function functionUnderTest() {
  return process.env.NODE_ENV;
}

describe('66787053', () => {
  it('test', () => {
    process.env.NODE_ENV = 'development';
    const actual = functionUnderTest();
    expect(actual).toBe('development');
  });

  it('should pass', () => {
    delete process.env.NODE_ENV;
    const actual = functionUnderTest();
    expect(actual).toBeUndefined();
  });
});
