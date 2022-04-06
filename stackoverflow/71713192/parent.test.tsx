import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';
import Child from './Child';
import Parent from './parent';

describe('71713192', () => {
  test('should pass', () => {
    const wrapper = shallow(<Parent />);
    expect(wrapper.find(Button).exists()).toBeTruthy();
    expect(wrapper.find(Button).prop('disabled')).toBeTruthy();
    wrapper.find(Child).invoke('onSelectionChange')(false);
    expect(wrapper.find(Button).prop('disabled')).toBeFalsy();
  });
});
