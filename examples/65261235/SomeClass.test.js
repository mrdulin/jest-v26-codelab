import SomeClass from './SomeClass';
import Rx from 'rxjs/Rx.js';

jest.mock('rxjs/Rx.js', () => {
  return { Subject: jest.fn() };
});

describe('65261235', () => {
  it('should pass', () => {
    let someClass = new SomeClass();
    expect(Rx.Subject).toBeCalledTimes(1);
  });
});
