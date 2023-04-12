import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { someFn } from './thunk';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});
it('should login success', () => {
  const email = 'test@test';
  const password = 123;
  mock.onGet('/user', { params: { email, password } }).reply(200, {
    id: 1,
    email,
    password,
  });

  const expectedActions = [
    { type: 'LOGIN', user: { email, password } },
    { type: 'LOGIN_SUCCESS', user: { id: 1, email, password } },
  ];

  return store.dispatch(someFn(email, password) as any).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('should login failure', () => {
  const email = 'test@test';
  const password = 123;
  mock.onGet('/user', { params: { email, password } }).networkError();

  const expectedActions = [
    { type: 'LOGIN', user: { email, password } },
    { type: 'LOGIN_FAILURE', user: null, error: 'Network Error' },
  ];

  return store.dispatch(someFn(email, password) as any).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
