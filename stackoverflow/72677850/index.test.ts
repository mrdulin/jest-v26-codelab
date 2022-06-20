import { configureStore, nanoid } from '@reduxjs/toolkit';
import expenseReducer, { addExpense } from '.';

describe('Expenses actions', () => {
  it('should returns an addExpense action object with prepared payload', () => {
    const newExpense = {
      description: 'this is a description',
      amount: 1000,
      createdAt: 0,
      note: 'this is a note',
    };
    expect(addExpense(newExpense)).toEqual({
      type: 'expenses/addExpense',
      payload: {
        id: expect.any(String),
        description: 'this is a description',
        amount: 1000,
        createdAt: 0,
        note: 'this is a note',
      },
    });
  });

  it('should add an expense', () => {
    const newExpense = {
      id: nanoid(),
      description: 'my new expense',
      amount: 1000,
      createdAt: 0,
      note: 'this is a note',
    };
    const state = expenseReducer([], {
      type: 'expenses/addExpense',
      payload: newExpense,
    });

    expect(state).toEqual([
      {
        id: expect.any(String),
        description: 'my new expense',
        amount: 1000,
        createdAt: 0,
        note: 'this is a note',
      },
    ]);
  });

  it('should add an expense - 2', () => {
    const newExpense = {
      description: 'my new expense',
      amount: 1000,
      createdAt: 0,
      note: 'this is a note',
    };
    const store = configureStore({ reducer: expenseReducer });
    store.dispatch(addExpense(newExpense));
    expect(store.getState()).toEqual([
      {
        id: expect.any(String),
        description: 'my new expense',
        amount: 1000,
        createdAt: 0,
        note: 'this is a note',
      },
    ]);
  });
});
