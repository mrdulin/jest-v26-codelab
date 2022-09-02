import axios, { AxiosRequestConfig } from 'axios';

export const dateFilters = async (platform) => {
  const dates = await fetchWrapper(platform.toLowerCase().concat('DateFilters'), platform, {});
  return dates;
};

export async function fetchWrapper(queryName: string, platform: string, queryParams?: {}) {
  const token = '123';
  const url = 'http://localhost:3000/api';
  const dbName = 'test';

  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const config: AxiosRequestConfig = {
    method: 'post',
    url,
    headers,
    data: {
      db: dbName,
    },
  };

  return axios(config);
}
