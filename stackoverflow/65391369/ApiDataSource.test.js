import { RESTDataSource } from 'apollo-datasource-rest';
import ApiDataSource from './ApiDataSource';

describe('65391369', () => {
  test('adds the authorization parameters to the get call', async () => {
    const mockedSuperGet = jest.spyOn(RESTDataSource.prototype, 'get').mockResolvedValueOnce('fake data');
    const apiDataSource = new ApiDataSource();
    await apiDataSource.get('test');
    expect(mockedSuperGet).toHaveBeenCalledWith('test', { app_id: 'test app id', app_key: 'test app key' }, {});
    mockedSuperGet.mockRestore();
  });
});
