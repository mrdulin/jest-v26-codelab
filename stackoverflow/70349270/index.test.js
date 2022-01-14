describe('70349270', () => {
  test('should pass', () => {
    const mockDate = new Date(1639533840728);
    const OriginlDate = global.Date;
    jest.spyOn(global, 'Date').mockImplementation((args) => {
      if (args) return new OriginlDate(args);
      return mockDate;
    });

    // test
    expect(new Date('1995-12-17T03:24:00').getTime()).toBeLessThan(1639533840728);
    expect(new Date().getTime()).toBe(1639533840728);
  });
});
