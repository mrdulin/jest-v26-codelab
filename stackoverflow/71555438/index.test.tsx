import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MyComp from './';

describe('71555438', () => {
  test('should pass', () => {
    let dispatchedActions: any[] = [];
    const store = createStore(function rootReducer(state = { someStateProp: 'fake value' }, action) {
      if (!action.type.startsWith('@@redux')) {
        dispatchedActions.push(action);
      }
      return state;
    });
    render(
      <Provider store={store}>
        <MyComp />
      </Provider>
    );
    expect(dispatchedActions).toEqual([{ type: 'SOME_ACTION' }]);
  });
});
