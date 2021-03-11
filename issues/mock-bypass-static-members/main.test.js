import { main } from './main';

jest.mock('./myclass', () => {
  const mMyClass = {
    getById: jest.fn(),
  };
  return {
    MyClass: jest.fn(() => mMyClass),
  };
});

describe('test suites', () => {
  it('should pass', () => {
    main();
  });
});
