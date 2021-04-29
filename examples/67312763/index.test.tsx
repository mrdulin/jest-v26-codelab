import React from 'react';
import { mount } from 'enzyme';
import { MyComp } from './';

describe('67312763', () => {
  it('should pass', () => {
    const props = {
      userId: '1',
      myAction: jest.fn(),
    };
    const wrapper = mount(<MyComp {...props} />);
    expect(props.myAction).toHaveBeenCalledWith('1');
    const userId = '2';
    wrapper.setProps({ userId });
    expect(props.myAction).toHaveBeenCalledWith('2');
  });
});
