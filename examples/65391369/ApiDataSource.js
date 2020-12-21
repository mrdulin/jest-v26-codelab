import { RESTDataSource } from 'apollo-datasource-rest';

export default class ApiDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'test';
  }

  async get(path, params = {}, init = {}) {
    return super.get(
      path,
      {
        ...params,
        app_id: 'test app id',
        app_key: 'test app key',
      },
      init
    );
  }
}
