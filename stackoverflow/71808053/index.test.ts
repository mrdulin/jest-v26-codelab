describe('test suite', () => {
  let theAnswer;
  beforeAll((done) => {
    setTimeout(() => {
      theAnswer = 42;
      done();
    }, 1_000);
  });

  test('a test case', () => {
    expect(theAnswer + 1).toEqual(43);
  });

  test('another test case', () => {
    expect(theAnswer + -1).toEqual(41);
  });
});
