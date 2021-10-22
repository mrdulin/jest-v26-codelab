const { handler } = require('./handler');

const dataService = {
  CreateItem: jest.fn(() => ({ data: true, error: null })),
  SendToAnalytics: jest.fn(() => ({ data: true, error: null })),
  SendEmail: jest.fn(() => ({ data: true, error: null })),
};
jest.mock('./data.service', () => jest.fn(() => dataService));

describe('Job Apply Handler', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('Successful response', async () => {
    const res = await handler();
    expect(res.statusCode).toEqual(200);
  });
  it('Error Response because of CreateItem Error', async () => {
    dataService.CreateItem.mockResolvedValueOnce({ data: null, error: true });
    const res = await handler();
    expect(res.statusCode).toEqual(500);
  });
  it('Error Response because of SendToAnalytics Error', async () => {
    dataService.SendToAnalytics.mockResolvedValueOnce({ data: null, error: true });
    const res = await handler();
    expect(res.statusCode).toEqual(500);
  });
  it('Error Response because of SendEmail Error', async () => {
    dataService.SendToAnalytics.mockResolvedValueOnce({ data: null, error: true });
    const res = await handler();
    expect(res.statusCode).toEqual(500);
  });
  it('Error Response because of Exception', async () => {
    dataService.SendToAnalytics.mockRejectedValueOnce(new Error('error'));
    const res = await handler();
    expect(res.statusCode).toEqual(500);
  });
});
