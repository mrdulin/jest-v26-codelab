import axios, { AxiosRequestConfig } from 'axios';

const token = '123';
const url = 'http://localhost:8080/api';
const dbName = 'arena';

export const dateFilters = async (platform) => {
  return fetchWrapper(platform.toLowerCase().concat('DateFilters'), platform, {});
};

export async function fetchWrapper(queryName: string, platform: string, queryParams?: {}) {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const config: AxiosRequestConfig = { method: 'post', url, headers, data: { db: dbName, csl: queryParams } };
  return axios(config);
}
