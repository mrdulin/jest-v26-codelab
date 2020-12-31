import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import AppLayout from './Components/AppLayout';

describe('App', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render the App', () => {
    console.log(wrapper.containsMatchingElement(<AppLayout />));
    expect(wrapper.containsMatchingElement(<AppLayout />)).toEqual(true);
  });
});
