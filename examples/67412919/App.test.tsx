import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { Portfolio } from './Portfolio';
import { RiskSelector } from './RiskSelector';

describe('67412919', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Home button clicked', () => {
    it('calls setStep with 0', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find(RiskSelector)).toHaveLength(1);
    });

    it('calls setStep with 1', () => {
      wrapper.find(RiskSelector).invoke('continue')();
      expect(wrapper.find(Portfolio)).toHaveLength(1);
      expect(wrapper.find(RiskSelector)).toHaveLength(0);
    });
  });
});
