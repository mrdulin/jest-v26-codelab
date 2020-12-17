import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Login } from './Login';
import axios from 'axios';

describe('65336283', () => {
  it('should display loginurl', async () => {
    const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({ LoginUrl: 'asxed' });
    const { getByTestId } = render(<Login />);
    expect(getByTestId('getUrl').getAttribute('href')).toEqual('');
    //https://stackoverflow.com/questions/61036156/react-typescript-testing-typeerror-mutationobserver-is-not-a-constructor/65336844#65336844
    const url = await waitFor(() => getByTestId('getUrl'));
    expect(postSpy).toBeCalledWith('https://somedomain/getLoginUrl', { data: 'http://localhost/' });
    expect(url.getAttribute('href')).toEqual('asxed');
    postSpy.mockRestore();
  });
});
