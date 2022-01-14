import App from './App';
import axios from 'axios';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';

const whenStable = async () => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
};

describe('65310275', () => {
  it('should get pdf', async () => {
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: 'Mocked PDF', status: 200 });
    const wrapper = mount(<App></App>);
    await whenStable();
    expect(wrapper.find('h1').text()).toEqual('My pdf from state: Mocked PDF');
    expect(getSpy).toBeCalledWith('url/endpoint');
    getSpy.mockRestore();
  });

  it('should handle error', async () => {
    const mErr = new Error('timeout');
    const getSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce(mErr);
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<App></App>);
    await whenStable();
    expect(wrapper.find('h1').text()).toEqual('My pdf from state: ');
    expect(getSpy).toBeCalledWith('url/endpoint');
    expect(logSpy).toBeCalledWith('timeout');
    getSpy.mockRestore();
  });
});
