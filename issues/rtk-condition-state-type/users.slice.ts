import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userAPI = {
  async fetchById(userId: string) {
    return { data: { id: userId, name: 'teresa teng' } };
  },
};

export const fetchUserById = createAsyncThunk<User, string>(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  },
  {
    condition: (userId, { getState }) => {
      const { users } = getState();
      const { fetchStatus } = users[userId];
      if (fetchStatus === 'loading') {
        return false;
      }
    },
  }
);

interface User {
  name: string;
  id: string;
}

interface UsersSliceState {
  [id: string]: { fetchStatus: 'idle' | 'loading'; data: User };
}

const usersSliceState: UsersSliceState = {
  1: {
    fetchStatus: 'idle',
    data: { name: '', id: '' },
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default usersSlice.reducer;
