import { mount } from 'enzyme';
import React from 'react';
import { MyFuncComp } from './';

describe('65039773', () => {
  it('should pass', () => {
    const wrapper = mount(<MyFuncComp />);
    expect(wrapper.find('div').text()).toEqual('3');
  });
});
