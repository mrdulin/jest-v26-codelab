describe('custom-method-on-require', () => {
  test('should pass', () => {
    require.resolveWeak = jest.fn();
    const { main } = require('.');
    main();
    expect(require.resolveWeak).toBeCalledWith('./components/about');
  });
});
