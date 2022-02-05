describe('compare functions', () => {
  test('should pass', () => {
    function factory() {
      return () => {};
    }
    const fn1 = factory();
    const fn2 = factory();
    expect(fn1).not.toBe(fn2);
    expect(fn1).toBe(fn1);
  });
});
