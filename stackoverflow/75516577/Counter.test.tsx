import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './Counter';
import counterSliceReducer from './counterSlice';

describe('75516577', () => {
  test('should increment the count', () => {
    const store = configureStore({
      reducer: {
        counter: counterSliceReducer,
      },
    });
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementBtn = screen.getByLabelText('Increment value');

    fireEvent.click(incrementBtn);
    expect(store.getState().counter.value).toBe(6);
  });
  test('should decrement the count', () => {
    const store = configureStore({
      reducer: {
        counter: counterSliceReducer,
      },
    });
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const decrementBtn = screen.getByLabelText('Decrement value');

    fireEvent.click(decrementBtn);
    expect(store.getState().counter.value).toBe(4);
  });
});
