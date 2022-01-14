import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from './MyComponent';

describe('66484613', () => {
  it('should pass', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener').mockImplementationOnce((_, handler) => {
      if (typeof handler === 'function') {
        handler({} as Event);
      }
    });
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.state('blah')).toBe('blah');
    expect(addEventListenerSpy).toBeCalledWith('scroll', expect.any(Function), true);
    addEventListenerSpy.mockRestore();
  });
});
