import ApiCrud from './ApiCrud';
import { axiosInstance } from './axiosInstance';

const mockedGet = {
  email: 'info@example.com',
};
jest.mock('./axiosInstance');

describe('Test API crud', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('Test can get base url', () => {
    const apiCrud = new ApiCrud('/fake-url');
    expect(apiCrud.getBaseUrl()).toBe('/fake-url');
  });

  it('Test can fetch items', () => {
    axiosInstance.get.mockResolvedValueOnce({ data: mockedGet });
    const apiCrud = new ApiCrud('/fake-url');
    return apiCrud.fetchItems().then((data) => {
      expect(data).toBe(mockedGet);
    });
  });
});
