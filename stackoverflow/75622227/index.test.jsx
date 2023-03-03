import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Display } from '.';

describe('75622227', () => {
  test('should pass', () => {
    const mockState = {
      data: {
        value: '',
        valueList: ['test-1', 'test-2'],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(mockState);

    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );
  });
});
