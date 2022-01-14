// const mRouter = { get: jest.fn() };
// jest.mock('express', () => ({
//   Router: jest.fn(() => mRouter),
// }));

jest.mock('express', () => ({
  Router() {
    return {
      get: jest.fn(),
    };
  },
}));

const router = require('./router');
it('should call the "get" method', () => {
  expect(router.get).toBeCalledTimes(1);
});
