import { shallow } from 'enzyme';
import React from 'react';
import { TestComponent } from './';

describe('68334346', () => {
  it('should pass', () => {
    const randomComponent = shallow(<TestComponent />);
    expect(randomComponent.find('Container')).toHaveLength(1);
    randomComponent.find('button').simulate('click');
    expect(randomComponent.find('Container')).toHaveLength(0);
  });
});
