describe('Concept proof', () => {
  const module = require('./file.js');
  const inst = new module();

  test('should call aux1', async () => {
    const a = jest.fn(() => 'return');

    inst.aux1 = a;
    await inst.main();

    expect(a).toHaveBeenCalled();
  });

  test('should call aux2', async () => {
    const b = jest.fn(() => 'return');

    inst.aux2 = b;
    await inst.main();

    expect(b).toHaveBeenCalled();
  });
});
