import a from './a';
import { B } from './b';

describe('67335501', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should print "1"', () => {
    const logSpy = jest.spyOn(console, 'log');
    a.flag = true;
    const b = new B();
    b.hello();
    expect(logSpy).toBeCalledWith('1');
  });

  it('should print "2"', () => {
    const logSpy = jest.spyOn(console, 'log');
    a.flag = false;
    const b = new B();
    b.hello();
    expect(logSpy).toBeCalledWith('2');
  });
});
