import { pollyWolly } from './polly';
import ShopifyService from './shopifyService';

const shopifyService = {
  getCurrentBulkOperation: jest.fn(),
};
jest.mock('./shopifyService', () => {
  return jest.fn(() => shopifyService);
});

describe('66790278', () => {
  const accessToken = '123';
  const shopName = 'teresa teng';
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should return value', async () => {
    shopifyService.getCurrentBulkOperation.mockResolvedValueOnce('fake value');
    const actual = await pollyWolly.cons(accessToken, shopName);
    expect(actual).toEqual('fake value');
    expect(shopifyService.getCurrentBulkOperation).toBeCalledTimes(1);
    expect(ShopifyService).toBeCalledWith({ accessToken, shopName });
  });

  it('should return another value', async () => {
    shopifyService.getCurrentBulkOperation.mockResolvedValueOnce('another fake value');
    const actual = await pollyWolly.cons(accessToken, shopName);
    expect(actual).toEqual('another fake value');
    expect(shopifyService.getCurrentBulkOperation).toBeCalledTimes(1);
    expect(ShopifyService).toBeCalledWith({ accessToken, shopName });
  });
});
