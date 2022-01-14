const axios = require('axios');
const { getTotalPrice, API } = require('./getTotalPrice');

jest.mock('axios');

describe('getTotalPrice', () => {
  it('fetches data successfully from an api', async () => {
    const res = { data: { rate: 34000 } };
    axios.get.mockResolvedValueOnce(res);
    await expect(getTotalPrice()).resolves.toEqual(res.data.rate);
  });
  it('throws an error when incorrect data is passed', async () => {
    const logSpy = jest.spyOn(console, 'log');
    const err = new Error('Wrong inputs passed in');
    axios.get.mockRejectedValueOnce(err);
    await getTotalPrice();
    expect(logSpy).toBeCalledWith(err);
  });
  it('uses correct url', async () => {
    const res = { data: { rate: 2000 } };
    axios.get.mockResolvedValueOnce(res);
    await getTotalPrice('ETH');
    expect(axios.get).toHaveBeenCalledWith(`${API}/ETH/USD`, { headers: { 'X-CoinAPI-Key': 'MY TOKEN' } });
  });
});
