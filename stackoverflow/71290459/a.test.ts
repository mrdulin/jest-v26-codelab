describe('71290459', () => {
  test('should pass', async () => {
    const localStorageMock = {
      getItem: jest.fn().mockImplementation((key) => {
        if (key === 'setNum') {
          return 'fake data';
        }
        return null;
      }),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    const { num } = require('./a');
    expect(num).toBe(10);
  });
});
