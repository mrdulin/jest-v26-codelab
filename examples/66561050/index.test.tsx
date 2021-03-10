import React, { useRef } from 'react';
import { mount } from 'enzyme';
import { DeviceModule, EVENT_TYPE } from './';
import { mocked } from 'ts-jest/utils';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  return {
    ...originReact,
    useRef: jest.fn(),
  };
});

const mUseRef = mocked(useRef);

describe('66561050', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should add event listener for device ref and do cleanup work when component unmount', () => {
    const mRef = { current: {} };
    let addEventListenerSpy!: jest.SpyInstance;
    let removeEventListenerSpy!: jest.SpyInstance;
    Object.defineProperty(mRef, 'current', {
      get() {
        return this._current;
      },
      set(current) {
        if (current) {
          addEventListenerSpy = jest.spyOn(current, 'addEventListener');
          removeEventListenerSpy = jest.spyOn(current, 'removeEventListener');
        }

        this._current = current;
      },
    });
    mUseRef.mockReturnValueOnce(mRef);
    const wrapper = mount(<DeviceModule />);
    expect(addEventListenerSpy).toBeCalledWith(EVENT_TYPE.MOUSEOVER, expect.any(Function));
    expect(addEventListenerSpy).toBeCalledWith(EVENT_TYPE.MOUSEOUT, expect.any(Function));
    wrapper.unmount();
    expect(removeEventListenerSpy).toBeCalledWith(EVENT_TYPE.MOUSEOVER, expect.any(Function));
    expect(removeEventListenerSpy).toBeCalledWith(EVENT_TYPE.MOUSEOUT, expect.any(Function));
  });
});
