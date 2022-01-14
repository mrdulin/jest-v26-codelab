import { main } from './';

describe('68901214', () => {
  test('should pass', () => {
    const mockedCommon = {
      utils: { fn1: jest.fn() },
      report: { fn2: jest.fn() },
      request: { get: jest.fn(), post: jest.fn() },
    };
    window.CUSTOM_OBJ = { common: mockedCommon };
    main();
    expect(mockedCommon.utils.fn1).toBeCalledTimes(1);
    expect(mockedCommon.report.fn2).toBeCalledTimes(1);
    expect(mockedCommon.request.get).toBeCalledTimes(1);
    expect(mockedCommon.request.post).toBeCalledTimes(1);
  });
});
