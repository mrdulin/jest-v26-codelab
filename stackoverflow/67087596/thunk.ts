import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myFunc = createAsyncThunk<string, { name: string; email: string }>('returns ID', async (nameAndEmail) => {
  const response = await axios.post('/backendroute', nameAndEmail);
  return response.data.id;
});

export { myFunc };
