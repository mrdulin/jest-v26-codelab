import { mount } from 'enzyme';
import React from 'react';

import MainRender from './MainRender';

describe('Testing MainRender', () => {
  it('it should return true when isHelper1 is true', () => {
    const tempValue = { value: { isHelper1: true, isHelper2: false } };
    const wrapper = mount(<MainRender {...tempValue} />);
  });
});
