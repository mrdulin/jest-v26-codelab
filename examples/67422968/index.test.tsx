import React from 'react';
import PubSub from 'pubsub-js';
import { mount } from 'enzyme';
import { App } from './';
import { act } from 'react-dom/test-utils';

describe('67422968', () => {
  it('should receive data and update the state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.text()).toBe('a');
    act(() => {
      PubSub.publishSync('TOPIC', 'b');
    });
    expect(wrapper.text()).toBe('b');
  });
});
