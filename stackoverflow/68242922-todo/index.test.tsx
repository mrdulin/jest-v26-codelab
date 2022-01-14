import { mount } from 'enzyme';
import React from 'react';
import { CustomComp } from '.';

describe('68242922', () => {
  it('should handle click', () => {
    const wrapper = mount(<CustomComp />);
    const mClickHandler = jest.fn();
    const inputDomNode = wrapper.find('input').getDOMNode();
    inputDomNode.addEventListener('click', mClickHandler, false);
    wrapper.find('button').simulate('click');
    expect(mClickHandler).toBeCalledTimes(1);
    inputDomNode.removeEventListener('click', mClickHandler);
  });
});
