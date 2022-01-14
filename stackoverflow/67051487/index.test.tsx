import { mount } from 'enzyme';
import React from 'react';
import { Component } from './';

describe('67051487', () => {
  it('should pass', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const component = mount(<Component />);
    expect(addEventListenerSpy).toBeCalledWith('hashchange', expect.any(Function));
    window.dispatchEvent(
      new HashChangeEvent('hashchange', {
        oldURL: 'http://example.com/index.html#123',
        newURL: 'http://example.com/idnex.html#456',
      })
    );
    component.unmount();
    expect(removeEventListenerSpy).toBeCalledWith('hashchange', expect.any(Function));
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
