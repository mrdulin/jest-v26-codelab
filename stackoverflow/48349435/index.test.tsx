import React from 'react';
import { shallow } from 'enzyme';
import MyComponent, { SomeCustomReactElement } from './';

describe('48349435', () => {
  it('should handle ref', () => {
    const wrapper = shallow(<MyComponent />);
    const mRef = {
      doSomething: jest.fn(),
    };
    wrapper.find(SomeCustomReactElement).getElement()['ref'](mRef);
    expect(mRef.doSomething).toBeCalledTimes(1);
  });
});
