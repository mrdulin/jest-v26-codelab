import React from 'react';
import Alert, { Box, Button, Para } from './Alert';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

describe('65697242', () => {
  it('should pass', () => {
    const mOnClose = jest.fn();
    const wrapper = mount(<Alert message="teresa teng" onClose={mOnClose}></Alert>);
    const button = enzymeFind(wrapper, Button);
    button.simulate('click');
    const para = enzymeFind(wrapper, Para);
    expect(enzymeFind(wrapper, Box)).toBeTruthy();
    expect(para.text()).toBe('teresa teng');
    expect(mOnClose).toBeCalled();
  });
});
