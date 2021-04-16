import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';

interface fetchUserResponse {
  name: string;
}

const fetchUser = createAsyncThunk<fetchUserResponse, void>('users/fetchUser', async () => {
  return { name: 'teresa teng' };
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { name: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.name = action.payload.name;
    });
  },
});

interface UserState {
  name: string;
}

interface AppState {
  user: UserState;
}

const storeConfig = {
  reducer: {
    user: usersSlice.reducer,
  },
  middleware(getDefaultMiddlewares) {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddlewares().concat(logger);
    } else {
      return getDefaultMiddlewares();
    }
  },
};

const store = configureStore(storeConfig);

store.dispatch(fetchUser());
