import { MyComponent } from './';
import React from 'react';
import { mount } from 'enzyme';

describe('Button', () => {
  it('should ensure the callback to be called', () => {
    const mCallback = jest.fn();
    const wrapper = mount(<MyComponent callback={mCallback}></MyComponent>);
    wrapper.find('button').simulate('click');
    expect(mCallback).toBeCalledTimes(1);
  });
});
