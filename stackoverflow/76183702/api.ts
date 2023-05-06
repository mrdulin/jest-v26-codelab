import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json"
  },
});

const apiService = {
  post: async (url: string, json = {}, reqConfig = {}) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    api.defaults.headers["Content-Type"] = "application/json";
    const data = json;
    try {
      const response = await api.post(url, data, {
        baseURL: BASE_URL,
        ...reqConfig
      });
      return response;
    } catch (err) {
      return err
    }
  }
}

export default apiService