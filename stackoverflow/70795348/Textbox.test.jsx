import Textbox from './Textbox';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('70795348', () => {
  it('invokes the maskPromoCode function with event value', () => {
    const mockStore = configureStore();
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <Textbox name="redeem-promo" />
      </Provider>
    );
    expect(wrapper.find('input').instance().value).toBe('131');
    const event = { target: { value: 'event value' } };
    wrapper.find('input').simulate('change', event);
    expect(wrapper.find('input').instance().value).toBe('***');
  });
});
