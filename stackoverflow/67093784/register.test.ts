import { register } from './register';

describe('67093784', () => {
  it('should pass', async () => {
    let methodNameA;
    const mServer = {
      method: function mockImplementation(m, func) {
        methodNameA = func;
      },
    };
    register(mServer);

    // test method
    const actual = await methodNameA();
    expect(actual).toEqual('something');
  });
});
