import { mount } from 'enzyme';
import React from 'react';
import { MyComponent } from './MyComponent';

export function createFCRefMock(props: { [propName: string]: any }) {
  const ref = { current: {} };
  const refKey = Symbol('ref');
  Object.defineProperty(ref, 'current', {
    set(current) {
      if (current) {
        Object.entries(props).forEach(([prop, value]) => {
          Object.defineProperty(current, prop, { value });
        });
      }
      this[refKey] = current;
    },
    get() {
      return this[refKey];
    },
  });
  return ref;
}

describe('my tests', () => {
  it('my test', async () => {
    const myCallBackMock = jest.fn();
    const ref = createFCRefMock({ clientHeight: 10, scrollHeight: 20 });
    jest.spyOn(React, 'createRef').mockReturnValueOnce(ref);
    const wrapper = mount(<MyComponent myCallBack={myCallBackMock} />);
    wrapper.find('.some-class').simulate('click');
    expect(myCallBackMock).toHaveBeenCalled();
  });
});
