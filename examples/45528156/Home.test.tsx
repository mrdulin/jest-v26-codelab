import { mount } from 'enzyme';
import React from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import Home from './Home';
import { Router } from 'react-router-dom';

describe('45528156', () => {
  let memoryHistory: MemoryHistory;
  let pushSpy: jest.SpyInstance;
  beforeEach(() => {
    memoryHistory = createMemoryHistory();
    pushSpy = jest.spyOn(memoryHistory, 'push');
  });
  afterEach(() => {
    pushSpy.mockRestore();
  });
  test('should navigate to /mission route', () => {
    const wrapper = mount(
      <Router history={memoryHistory}>
        <Home />
      </Router>
    );
    const link = wrapper.find('a');
    link.simulate('click', { button: 0 });
    expect(pushSpy).toBeCalledWith('/mission');
  });
});
