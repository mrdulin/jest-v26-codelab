import axios from 'axios';

const apiClient = () => {
  const access_token = localStorage.getItem('access_token');
  const instance = axios.create({
    baseURL: window.config.apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    responseType: 'json',
  });
  return instance;
};

export default apiClient;
