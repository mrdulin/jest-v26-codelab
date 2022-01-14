import { mount } from 'enzyme';
import React from 'react';
import { Example } from './Example';

describe('70585877', () => {
  test('should pass', () => {
    const wrapper = mount(<Example />);
    const button = wrapper.find('#count-up');
    expect(wrapper.find('p').text()).toEqual('Vous avez cliqué 0 fois');
    button.simulate('click');
    expect(wrapper.find('p').text()).toEqual('Vous avez cliqué 1 fois');
    button.simulate('click');
    expect(wrapper.find('p').text()).toEqual('Vous avez cliqué 2 fois');
  });
});
