const handler = require('./handler');
const request = require('request');

describe('73754637', () => {
  test('should get some task success', () => {
    jest.spyOn(request, 'get').mockImplementation((options, callback) => {
      const mResponse = { statusCode: 200 };
      const mBody = { Test: 'test' };
      callback(mResponse, mBody);
    });
    const mRes = {
      writeHead: jest.fn(),
      write: jest.fn(),
      end: jest.fn(),
    };
    handler.getSomeTask(mRes);
    expect(request.get).toBeCalledWith({ url: 'http://localhost:3000/api' }, expect.any(Function));
    expect(mRes.writeHead).toBeCalledWith(200, { 'content-type': 'application/json' });
    expect(mRes.write).toBeCalledWith({ Test: 'test' });
    expect(mRes.end).toBeCalledTimes(1);
  });
});
