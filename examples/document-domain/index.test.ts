describe('pass', () => {
  test('should pass', () => {
    Object.defineProperty(document, 'domain', {
      writable: true,
      value: 'https://www.example.com',
    });
    expect(document.domain).toEqual('https://www.example.com');
  });
});
