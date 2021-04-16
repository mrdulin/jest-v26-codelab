import { AnyAction, configureStore, ConfigureStoreOptions, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { ThunkMiddleware } from 'redux-thunk';

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

const storeConfig: ConfigureStoreOptions<AppState, AnyAction, [ThunkMiddleware<AppState, AnyAction>]> = {
  reducer: {
    user: usersSlice.reducer,
  },
};

if (process.env.NODE_ENV !== 'production') {
  storeConfig.middleware = (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger);
}

const store = configureStore(storeConfig);

store.dispatch(fetchUser());
