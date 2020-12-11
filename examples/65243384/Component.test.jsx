import React from 'react';
import { Component } from './Component';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

const whenStable = async () => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
};

describe('65243384', () => {
  let fetch;
  beforeEach(() => {
    fetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = fetch;
  });
  it('should success', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce('mocked success data');
    const wrapper = mount(<Component></Component>);
    expect(wrapper.find('p').text()).toBe('Loading Screen');
    await whenStable();
    expect(wrapper.find('p').text()).toBe('Success:mocked success data');
    expect(global.fetch).toBeCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  });

  it('should fail', async () => {
    const mErr = new Error('network');
    global.fetch = jest.fn().mockRejectedValueOnce(mErr);
    const wrapper = mount(<Component></Component>);
    expect(wrapper.find('p').text()).toBe('Loading Screen');
    await whenStable();
    expect(wrapper.find('p').text()).toBe('ERROR:');
    expect(global.fetch).toBeCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  });
});
