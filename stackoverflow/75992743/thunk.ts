import axios from 'axios';

const login = (email, password) => {
  return {
    type: 'LOGIN',
    user: { email, password },
  };
};

const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user,
  };
};

const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    user: null,
    error,
  };
};

export const someFn = (email, password) => (dispatch) => {
  dispatch(login(email, password));
  return axios
    .get('/user', { params: { email, password } })
    .then((response) => dispatch(loginSuccess(response.data)))
    .catch((error) => dispatch(loginFailure(error.message)));
};
