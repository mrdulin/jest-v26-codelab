import { mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ComboBox from './ComboBox';

describe('68393118', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ComboBox />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  test('Combobox has 1 hidden options', () => {
    const elem = wrapper.find('option');
    expect(elem.getDOMNode()).toHaveAttribute('hidden');
  });
});
