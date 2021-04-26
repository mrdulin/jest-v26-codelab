import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import { createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import fetch, { Request } from 'node-fetch';

const store = configureStore({
  reducer(state = {}) {
    return state;
  },
});

const userAPI = {
  async fetchById(userId, signal) {
    const req = new Request(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });
    return fetch(req)
      .then((res) => res.json())
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('aborted');
        }
      });
  },
};

const fetchUserById = createAsyncThunk<any, string>('users/fetchByIdStatus', async (userId, thunkAPI) => {
  thunkAPI.signal.addEventListener('abort', () => {
    console.log(thunkAPI.signal.aborted);
  });
  const response = await userAPI.fetchById(userId, thunkAPI.signal);
  return response.data;
});

async function main() {
  const userId = '1';
  const promise = store.dispatch(fetchUserById(userId));
  promise.abort();
}

main();
