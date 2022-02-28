import { mount } from 'enzyme';
import Cookies from 'js-cookie';
import React from 'react';
import A from './A';
import B from './B';
import C from './C';
import AComponent from './';
import isValid from './helpers/isValid';
import { act } from 'react-dom/test-utils';

jest.mock('./helpers/isValid');

const whenStable = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

describe('71289768', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should render A', () => {
    jest.spyOn(Cookies, 'get').mockReturnValue('sid:abc123');
    const wrapper = mount(<AComponent />);
    expect(wrapper.find(A).exists()).toBeTruthy();
  });
  test('should render B', async () => {
    isValid.mockResolvedValueOnce(true);
    const wrapper = mount(<AComponent data />);
    await whenStable(wrapper);
    expect(wrapper.find(B).exists()).toBeTruthy();
  });
  test('should render C', () => {
    const wrapper = mount(<AComponent />);
    expect(wrapper.find(C).exists()).toBeTruthy();
  });
});
