import { loadData, types } from './hello.actions';

describe('67236356', () => {
  it('should pass', () => {
    const payload = {
      request: 'request',
    };

    const expectedAction = {
      type: types.TEST_API,
      coreApi: {
        body: payload.request,
        success: expect.any(Function),
      },
    };

    expect(loadData(payload.request)).toEqual(expectedAction);
  });
});
