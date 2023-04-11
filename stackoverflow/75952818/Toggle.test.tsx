import React from 'react';
import { shallow } from 'enzyme';
import Toggle, { SearchMenu } from './Toggle';

describe('Toggle Component', () => {
  it('check state', () => {
    const wrapper = shallow(<Toggle />);

    // Testing Initial State
    expect(wrapper.find(SearchMenu).exists()).toBeFalse();

    // Testing state after mouseover
    wrapper.simulate('mouseover');
    expect(wrapper.find(SearchMenu).exists()).toBeTrue();

    // Testing state after mouseleave
    wrapper.simulate('mouseleave');
    expect(wrapper.find(SearchMenu).exists()).toBeFalse();
  });
});
