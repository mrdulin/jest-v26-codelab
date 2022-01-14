import { shallow } from 'enzyme';
import React from 'react';
import { App } from './';

describe('68566755', () => {
  test('should pass', () => {
    const wrapper = shallow(<App />);
    const mEvent = {
      key: 'Backspace',
      nativeEvent: { stopImmediatePropagation: jest.fn() },
    };
    wrapper.simulate('keydown', mEvent);
    expect(mEvent.nativeEvent.stopImmediatePropagation).toBeCalledTimes(1);
  });
});
