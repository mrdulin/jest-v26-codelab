describe('myFunc tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('test one', async () => {
    jest.doMock('./myFunc', () => jest.fn(() => 'one'));
    const myFunc = (await import('./myFunc')).default;
    expect(myFunc()).toBe('one');
  });

  it('test two', async () => {
    jest.doMock('./myFunc', () => jest.fn(() => 'two'));
    const myFunc = (await import('./myFunc')).default;
    expect(myFunc()).toBe('two');
  });

  it('test three', async () => {
    jest.doMock('./myFunc', () => jest.fn(() => 'three'));
    const myFunc = (await import('./myFunc')).default;
    expect(myFunc()).toBe('three');
  });
});
