import { configureStore, ConfigureStoreOptions, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

const storeConfig: ConfigureStoreOptions<AppState> = {
  reducer: {
    user: usersSlice.reducer,
  },
};

const store = configureStore(storeConfig);

store.dispatch(fetchUser());
