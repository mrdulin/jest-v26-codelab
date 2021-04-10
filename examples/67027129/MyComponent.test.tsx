import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from './MyComponent';
import { Flow } from './Flow';

describe('67027129', () => {
  it('should set open to true', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Flow).prop('isOpen')).toBeFalsy();
    wrapper.find('button').simulate('click');
    expect(wrapper.find(Flow).prop('isOpen')).toBeTruthy();
  });

  it('should set open to false', () => {
    const wrapper = shallow(<MyComponent />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(Flow).prop('isOpen')).toBeTruthy();
    wrapper.find(Flow).invoke('onClose')();
    expect(wrapper.find(Flow).prop('isOpen')).toBeFalsy();
  });
});
