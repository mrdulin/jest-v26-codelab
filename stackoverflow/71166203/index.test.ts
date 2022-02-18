describe('test suites', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('test one', async () => {
    jest.doMock('./index', () => jest.fn(() => 'one'));
    const myFunc = (await import('.')).default;
    expect(myFunc()).toBe('one');
  });
});

// it('test two', async () => {
//   jest.doMock('./myFunc', () => jest.fn(() => 'two'));
//   const myFunc = (await import('.')).default;
//   expect(myFunc()).toBe('two');
// });

// it('test three', async () => {
//   jest.doMock('./myFunc', () => jest.fn(() => 'three'));
//   const myFunc = (await import('.')).default;
//   expect(myFunc()).toBe('three');
// });
