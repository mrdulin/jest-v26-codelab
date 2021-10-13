import React from 'react';
import { Link } from 'react-router-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import { Order } from './Order';
import { LocationDescriptorObject } from 'history';

it('Order cards by default using date in descending', () => {
  const props = { order: { orderId: '1111', brand: 'DIGITAL' } };
  const component: ShallowWrapper = shallow(<Order {...props} />);
  const links = component.find(Link);
  const toProps = links.at(0).prop<LocationDescriptorObject>('to');
  expect(toProps.pathname).toEqual('/order/DIGITAL/1111');
});
