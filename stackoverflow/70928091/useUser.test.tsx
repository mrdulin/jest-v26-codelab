import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import * as slice from './slice';
import { useUser } from './useUser';

describe('useUser', () => {
  test('should pass', () => {
    const getUserSpy = jest.spyOn(slice, 'getUser');
    function TestComp(props) {
      console.log(props);
      useUser();
      return null;
    }
    const store = createStore(() => ({}));

    const { rerender } = renderHook(TestComp, {
      initialProps: { data: '1' },
      wrapper: ({ children }) => (
        <Provider store={store}>
          <MemoryRouter initialEntries={['/test']}>
            <Route path="/:user">{children}</Route>
          </MemoryRouter>
        </Provider>
      ),
    });
    expect(getUserSpy).toBeCalledWith('test');
    rerender({ data: '2' });
    expect(getUserSpy).toBeCalledTimes(1);
  });
});
