import axios from 'axios';
const REACT_FE_ACCESS_TOKEN = 'REACT_FE_ACCESS_TOKEN';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'content-type': 'application/json',
  },
  responseType: 'json',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(REACT_FE_ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axiosInstance };
