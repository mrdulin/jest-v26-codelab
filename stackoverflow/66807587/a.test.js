const axios = require('axios');

jest.mock('axios');

const foo = require('./a').default;

describe('testing a.js', () => {
  it('testing foo function', async () => {
    axios.get.mockResolvedValue({
      example: 'response',
    });
    const response = await foo();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      example: 'response',
    });
  });
});
