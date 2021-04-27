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

  fetchByName() {
    return {
      abort() {
        console.log('abort');
      },
    };
  },
};

const fetchUserById = createAsyncThunk<any, string>('users/fetchByIdStatus', async (userId, thunkAPI) => {
  console.log('25:', thunkAPI.signal.aborted);
  thunkAPI.signal.addEventListener('abort', () => {
    console.log('27:', thunkAPI.signal.aborted);
  });
  console.log('29:', thunkAPI.signal.aborted);
  const response = await userAPI.fetchById(userId, thunkAPI.signal);
  return response.data;
});

const fetchByName = createAsyncThunk<any, void>('users/fetchByName', async (_, thunkAPI) => {
  console.log('25:', thunkAPI.signal.aborted);
  const requestTask = userAPI.fetchByName();
  thunkAPI.signal.addEventListener('abort', () => {
    console.log('27:', thunkAPI.signal.aborted);
    requestTask.abort();
  });
  console.log('29:', thunkAPI.signal.aborted);
  // if (thunkAPI.signal.aborted) {
  //   requestTask.abort();
  // }
  return requestTask;
});

async function main() {
  const userId = '1';
  // const promise = store.dispatch(fetchUserById(userId));
  const promise = store.dispatch(fetchByName());
  promise.abort();
}

main();
