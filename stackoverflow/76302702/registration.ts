import { createSlice } from '@reduxjs/toolkit';

const registrationFormSlice = createSlice({
  name: 'registration',
  initialState: {},
  reducers: {
    reset() { }
  }
})

export { registrationFormSlice }