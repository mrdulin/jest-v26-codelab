import { MyComp } from './Component';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import React from 'react';
import { render, waitFor } from '@testing-library/react';

const mock = new MockAdapter(axios);

describe('68064134', () => {
  it('should pass', async () => {
    mock.onGet('/my-url').reply(200, { data: 'hello' });

    const rendered = render(<MyComp />);

    await waitFor(() => rendered.getByTestId('data'));

    expect(rendered.getByTestId('data')).toBeTruthy();
    expect(rendered.getByTestId('data').textContent).toBe('hello');
  });
});
