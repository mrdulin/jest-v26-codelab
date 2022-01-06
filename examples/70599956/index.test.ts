import http from 'axios';
import { main } from './';

jest.mock('axios', () => ({
  create: jest.fn(() => http),
  get: jest.fn(),
}));
const httpMock = http as jest.Mocked<typeof http>;

describe('Update operations!', () => {
  const sku1 = { id: 'sku-1' };
  const sku2 = { id: 'sku-2' };

  beforeAll(() => {
    httpMock.get.mockImplementation((url: string): any => {
      if (url.endsWith('/SKU-1')) {
        return Promise.resolve({ data: Object.assign({}, sku1) });
      }
      if (url.endsWith('/SKU-2')) {
        return Promise.resolve({ data: Object.assign({}, sku2) });
      }
    });
  });

  test('should pass', async () => {
    const actual = await main();
    expect(actual).toEqual([{ data: { id: 'sku-1' } }, { data: { id: 'sku-2' } }]);
  });
});
