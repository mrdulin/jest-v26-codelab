import Greet from './Greet';
import createMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

const mockStore = createMockStore([]);

describe('68904328', () => {
  test('should dispatch action for getting details', () => {
    const state = {
      stateDatalist: [],
      CountryDatalist: [],
    };
    const store = mockStore(state);
    mount(
      <Provider store={store}>
        <Greet />
      </Provider>
    );
    expect(store.getActions()).toEqual([{ type: 'GET_DETAIL' }]);
  });

  test('should do nothing', () => {
    const state = {
      stateDatalist: [1],
      CountryDatalist: [1],
    };
    const store = mockStore(state);
    mount(
      <Provider store={store}>
        <Greet />
      </Provider>
    );
    expect(store.getActions()).toEqual([]);
  });
});
