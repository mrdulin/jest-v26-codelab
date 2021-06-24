import React from 'react';
import { shallow } from 'enzyme';
import App from './MyApp';
import * as someLib from './someLibrary';

describe('App Component', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('sets the user context', () => {
    const getUserContextSpy = jest.spyOn(someLib, 'getUserContext').mockImplementation((callback) => {
      callback({ userName: 'mocked user name', locale: 'zh_CN' });
    });
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual('mocked user name');
    expect(getUserContextSpy).toBeCalledWith(expect.any(Function));
  });
});
