//@ts-nocheck
import { shallow } from 'enzyme';
import React from 'react';
import TextEditor from './TextEditor';

describe('TextEditor', () => {
  it('handles change event', () => {
    const wrapper = shallow(<TextEditor />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('input').simulate('change', { target: { value: 'test value' } });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
