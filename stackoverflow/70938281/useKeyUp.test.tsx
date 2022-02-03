import { mount } from 'enzyme';
import React from 'react';
import useKeyUp from './useKeyUp';

describe('70938281', () => {
  test('should call onKeyUp callback', () => {
    const mOnKeyUp = jest.fn();
    function TestComp() {
      useKeyUp('s', mOnKeyUp);
      return null;
    }
    const wrapper = mount(<TestComp />);
    const keyUpEvent = new KeyboardEvent('keyup', { key: 's' });
    window.dispatchEvent(keyUpEvent);
    expect(mOnKeyUp).toBeCalledTimes(1);
    wrapper.unmount();
    window.dispatchEvent(keyUpEvent);
    expect(mOnKeyUp).toBeCalledTimes(1);
  });

  test('should NOT call onKeyUp callback', () => {
    const mOnKeyUp = jest.fn();
    function TestComp() {
      useKeyUp('s', mOnKeyUp);
      return null;
    }
    mount(<TestComp />);
    const keyUpEvent = new KeyboardEvent('keyup', { key: 'a' });
    window.dispatchEvent(keyUpEvent);
    expect(mOnKeyUp).not.toBeCalled();
  });
});
