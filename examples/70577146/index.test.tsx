import { shallow } from 'enzyme';
import React from 'react';
import Example from './';

describe('70577146', () => {
  test('should pass', () => {
    const wrapper = shallow(<Example />);
    const button = wrapper.find('div[children="Click"]');
    expect(wrapper.find('div[children="simple text"]').exists()).toBeFalsy();
    button.simulate('mousedown');
    expect(wrapper.find('div[children="simple text"]').exists()).toBeTruthy();
  });
});
