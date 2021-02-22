import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const APIUrl = 'http://localhost:3000/';

export interface User {}
export interface ErrorResponse {}

export const createAccount = createAsyncThunk('account/createAccount', async (Info: User) => {
  try {
    return await axios.post(APIUrl + 'users.json', Info);
  } catch (err) {
    const { status, errorMessage } = err?.response?.data;
    const error: ErrorResponse = {
      status: status,
      message: errorMessage,
    };

    return error;
  }
});
