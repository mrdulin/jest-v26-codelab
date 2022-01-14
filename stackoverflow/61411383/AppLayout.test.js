import { shallow } from 'enzyme';
import React from 'react';
import AppLayout from './AppLayout';
import { ContentLayout } from './styles';

it('renders <AppLayout /> component', () => {
  const wrapper = shallow(<AppLayout />);
  expect(wrapper.find(ContentLayout)).toHaveLength(1);
});
