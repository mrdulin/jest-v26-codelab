import { MyFunctionalComponent } from './';
import createMockStore from 'redux-mock-store';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';

const mockStore = createMockStore([]);

describe('69013562', () => {
  test('should render AccessUnavailablePanel', () => {
    const state = {
      user: { id: '1', otherid: '2' },
      Selection: { accounts: [] },
    };
    const store = mockStore(state);
    render(<MyFunctionalComponent />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    expect(screen.getAllByText('AccessUnavailablePanel')).toBeTruthy();
    expect(store.getActions()).toEqual([]);
  });

  test('should render CircularLoader and dispatch get details action', () => {
    const state = {
      user: { id: '1', otherid: '2' },
      Selection: {},
    };
    const store = mockStore(state);
    render(<MyFunctionalComponent />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    expect(screen.getAllByText('CircularLoader')).toBeTruthy();
    expect(store.getActions()).toEqual([{ type: 'GET_DETAILS' }]);
  });

  test('should render Redirect', () => {
    const state = {
      user: { id: '1', otherid: '2' },
      Selection: { accounts: [1] },
    };
    const store = mockStore(state);
    render(<MyFunctionalComponent />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    expect(screen.getAllByText('Redirect')).toBeTruthy();
    expect(store.getActions()).toEqual([]);
  });

  test('should render MyList', () => {
    const state = {
      user: { id: '1', otherid: '2' },
      Selection: { accounts: [1, 2, 3] },
    };
    const store = mockStore(state);
    render(<MyFunctionalComponent />, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    expect(screen.getAllByText('MyList')).toBeTruthy();
    expect(store.getActions()).toEqual([]);
  });
});
