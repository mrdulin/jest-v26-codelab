import { mount } from 'enzyme';
import React from 'react';
import { MyComponent } from './';

describe('69127076', () => {
  test('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<MyComponent />);
    wrapper.instance()['myFunction']();
    expect(logSpy).toBeCalledWith('shouldBecorrectValue');
    logSpy.mockRestore();
  });
});
