import { shallow } from 'enzyme';
import React from 'react';
import { Example } from './Example';

describe('70705214', () => {
  test('should pass', () => {
    const wrapper = shallow(<Example />);
    const happyIcons = wrapper.findWhere((n) => n.prop('title') === 'happy');
    const sadIcons = wrapper.findWhere((n) => n.prop('title') === 'sad');
    console.log(happyIcons.debug());
    console.log(sadIcons.debug());
    expect(happyIcons).toHaveLength(3);
    expect(sadIcons).toHaveLength(1);
  });
});
