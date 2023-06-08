describe('76428962', () => {
  beforeEach(() => {
    jest.resetModules();
  })
  test('should mock axios', async () => {
    const { main } = await import('./main');
    const actual = await main();
    console.log(actual?.data);
  });
  test('should not mock axios', async () => {
    jest.dontMock('axios');
    const { main } = await import('./main');
    const actual = await main();
    console.log(actual?.data);
  });
});