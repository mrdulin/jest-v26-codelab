import { shallow } from 'enzyme';
import React from 'react';
import { Example } from '.';

describe('53407041', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Example></Example>);
  });
  it('Testing empty Salesforce Id Check', () => {
    wrapper.find('input[name="prospectId"]').simulate('change', { target: { name: 'prospectId', value: '' } });
    expect(wrapper.state('validSalesForceId')).toEqual(false);
  });

  it('Testing the ProspectId State', () => {
    wrapper
      .find('input[name="prospectId"]')
      .simulate('blur', { target: { name: 'prospectId', value: '001G000000mIQIY' } });
    expect(wrapper.state('prospectId')).toEqual('001G000000mIQIY');
  });
});
