import { Consume } from './consume';
import { Consumer } from './lib';
import { RandomService } from './random.service';

describe('71246273', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should pass', () => {
    jest.spyOn(Consumer.prototype, 'consume').mockImplementation((fn) => fn());
    const doSomethingSpy = jest.spyOn(RandomService.prototype, 'doSomething');
    const consume = new Consume();
    consume.consume();
    expect(doSomethingSpy).toBeCalledWith('withParam');
  });
});
