import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('Counter Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('render the click event of decrement button of and check the counter value cannot be less than 0', () => {
    const decrementButton = wrapper.find('#decrement-btn');
    decrementButton.simulate('click');
    decrementButton.simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
});
