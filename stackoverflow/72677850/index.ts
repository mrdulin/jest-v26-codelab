// @ts-nocheck

import { createSlice, nanoid } from '@reduxjs/toolkit';

const expensesDefaultState = [];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: expensesDefaultState,
  reducers: {
    addExpense: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
      prepare: (payload) => {
        return {
          payload: {
            id: nanoid(),
            description: payload.description ? payload.description : '',
            note: payload.note ? payload.note : '',
            amount: payload.amount ? payload.amount : 0,
            createdAt: payload.createdAt ? payload.createdAt : 0,
          },
        }
      },
    },
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
