import axios from 'axios';

export function authService(user, apiEndpoint) {
  return axios
    .post(`http://localhost:3000/api/v1/${apiEndpoint}`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
