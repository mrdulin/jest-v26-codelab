import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const userReducer = (state = { name: '' }) => {
  return state;
};

function render(
  ui,
  { preloadedState, store = configureStore({ reducer: { user: userReducer }, preloadedState }), ...renderOptions }
) {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
