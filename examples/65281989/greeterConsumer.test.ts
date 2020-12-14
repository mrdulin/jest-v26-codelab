import initGreeter from './greeter';
import { greetSomeone } from './greeterConsumer';

const mGreeter = {
  sayHello: jest.fn(),
};

jest.mock('./greeter', () => {
  return jest.fn(() => mGreeter);
});

describe('greeterConsumer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('greeter consumer should call SayHello on greeter', () => {
    greetSomeone('sam');
    expect(initGreeter).toBeCalledTimes(1);
    expect(mGreeter.sayHello).toBeCalledWith('sam');
  });

  it('greeter consumer throws exception', () => {
    mGreeter.sayHello.mockImplementationOnce(() => {
      throw new Error('oops');
    });
    expect(() => greetSomeone('sam')).toThrowError('oops');
    expect(initGreeter).toBeCalledTimes(1);
    expect(mGreeter.sayHello).toBeCalledWith('sam');
  });
});
