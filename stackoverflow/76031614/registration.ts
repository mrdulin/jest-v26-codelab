import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IRegistrationState = {
  data: {
    email: {
      value: string;
      error: boolean;
      errorText: string | null;
    };
  };
};

export const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState: {
    data: {
      email: {
        value: '',
        error: false,
        errorText: null,
      },
    },
  },
  reducers: {
    setEmail(state: IRegistrationState, action: PayloadAction<{ value: string; error: boolean; text: string }>) {
      state.data.email.value = action.payload.value;
      state.data.email.error = action.payload.error;
      state.data.email.errorText = action.payload.text;
    },
  },
});
