import { configureStore } from '@reduxjs/toolkit';
import usersSliceReducer from './users.slice';

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
