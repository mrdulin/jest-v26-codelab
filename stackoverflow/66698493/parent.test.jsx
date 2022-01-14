import React from 'react';
import ParentComponent from './parent';
import { mount } from 'enzyme';

describe('66698493', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  });
  it('should change the inner HTML', () => {
    const wrapper = mount(<ParentComponent />, { attachTo: document.getElementById('container') });
    expect(document.getElementById('role_1').innerHTML).toEqual('');
    wrapper.find('button').simulate('click');
    expect(document.getElementById('role_1').innerHTML).toEqual('role_1');
  });
});
