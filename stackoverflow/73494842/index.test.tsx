import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MyComp, RootState, Template } from '.';

describe('73494842', () => {
  test('should pass', () => {
    const templates: Template[] = [
      { id: '1', name: 'a' },
      { id: '2', name: 'b' },
    ];
    const mockStore = createStore<RootState, any, any, any>((state = { templates }, action) => {
      if (action.type === 'UPATE_NAME') {
        return {
          ...state,
          templates: templates.map((t) => (t.id === action.payload.id ? { ...t, name: action.payload.name } : t)),
        };
      }
      return state;
    });
    render(
      <Provider store={mockStore}>
        <MyComp />
      </Provider>
    );
    mockStore.dispatch({ type: 'UPATE_NAME', payload: { id: '1', name: 'c' } });
  });
});
