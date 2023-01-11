describe('74516778', () => {
  test('should pass', async () => {
    const clientInstanceMock = {
      login: jest.fn(),
    };
    const someClientMockModule = {
      Client: jest.fn().mockReturnValue(clientInstanceMock),
      getCreds: jest.fn().mockReturnValue({ password: '123' }),
    };
    jest.doMock('./some-client', () => someClientMockModule);
    const { getKey } = await import('./');
    await getKey();
    expect(someClientMockModule.Client).toBeCalledTimes(1);
    expect(someClientMockModule.getCreds).toBeCalledTimes(1);
    expect(clientInstanceMock.login).toBeCalledWith({ password: '123' });
  });
});
