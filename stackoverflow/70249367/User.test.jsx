import { User } from './User';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

function renderUI(reducers) {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer);
  return render(
    <Provider store={store}>
      <User />
    </Provider>
  );
}

describe('70249367', () => {
  test('should render spinner', () => {
    const { container } = renderUI({
      user: (state = { name: '', isLoading: true }) => {
        return state;
      },
    });
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });

  test("renders 'Link with Reddit' link by default", () => {
    const { getByText } = renderUI({
      user: (state = { name: '', isLoading: false }) => {
        return state;
      },
    });
    expect(getByText('Link with Reddit')).toBeInTheDocument();
  });

  test('should render username', () => {
    const { getByText } = renderUI({
      user: (state = { name: 'teresa teng', isLoading: false }) => {
        return state;
      },
      auth: (state = {}) => state,
    });
    expect(getByText('teresa teng')).toBeInTheDocument();
  });
});
