import React from 'react';
import { App } from './';
import { mount } from 'enzyme';

describe('67416004', () => {
  it('should pass', () => {
    const wrapper = mount(<App />);
    wrapper.find('.firstCounter').simulate('click');
  });
});
