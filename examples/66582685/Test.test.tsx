import { mount } from 'enzyme';
import React from 'react';
import { Test } from './Test';

describe('66582685', () => {
  it('should pass', () => {
    const wrapper = mount(<Test />);
    // @ts-ignore
    wrapper.instance().updateState(3);
    expect(wrapper.state('thisIsAState')).toEqual(3);
    expect(wrapper.text()).toEqual('3');
  });
});
