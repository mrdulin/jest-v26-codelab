import React from 'react';
import { mount } from 'enzyme';
import { MyComp } from './';

describe('67384129', () => {
  it('should pass', () => {
    const wrapper = mount(<MyComp />);
    wrapper.unmount();
  });
});
