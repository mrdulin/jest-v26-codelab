import * as sm from './some-client';
import { getKey } from './';

jest.mock('./some-client');

const smClientMock = sm.Client as jest.MockedClass<typeof sm.Client>;
const smGetCredsMock = sm.getCreds as jest.MockedFunction<typeof sm.getCreds>;

describe('74516778', () => {
  test('should pass', async () => {
    smGetCredsMock.mockResolvedValue({ pwd: '123' });
    await getKey();
    expect(smClientMock).toBeCalledTimes(1);
    expect(smGetCredsMock).toBeCalledTimes(1);
    const smClientInstanceMock = smClientMock.mock.instances[0];
    expect(smClientInstanceMock.login).toBeCalledWith({ pwd: '123' });
  });
});

// test.skip('should pass', async () => {
//   const clientInstanceMock = {
//     login: jest.fn(),
//   };
//   const someClientMockModule = {
//     Client: jest.fn().mockReturnValue(clientInstanceMock),
//     getCreds: jest.fn().mockReturnValue({ password: '123' }),
//   };
//   jest.doMock('./some-client', () => someClientMockModule);
//   const { getKey } = await import('./');
//   await getKey();
//   expect(someClientMockModule.Client).toBeCalledTimes(1);
//   expect(someClientMockModule.getCreds).toBeCalledTimes(1);
//   expect(clientInstanceMock.login).toBeCalledWith({ password: '123' });
// });
