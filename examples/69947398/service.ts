import axios from 'axios';

export const baseURL = 'http://localhost:3000/api';
export function getData(url = '') {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}${url}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
