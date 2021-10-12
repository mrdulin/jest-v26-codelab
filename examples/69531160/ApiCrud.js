import { axiosInstance as api } from './axiosInstance';

export default class ApiCrud {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  fetchItems() {
    return api.get(`${this.getBaseUrl()}`).then((result) => result.data);
  }

  getBaseUrl() {
    return this.baseUrl;
  }
}
