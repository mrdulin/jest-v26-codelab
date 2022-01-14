import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ExampleList from './ExampleList';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

test('ExampleList Component', async () => {
  let mock = new MockAdapter(Axios);
  mock.onGet('http://dummy.restapiexample.com/api/v1/employees').reply(200, {
    status: 'success',
    data: [
      {
        id: '1',
        employee_name: 'Wai Yan Hein',
        employee_salary: '720800',
        employee_age: '61',
      },
    ],
  });

  let { getByText } = render(<ExampleList />);

  const listData = await waitFor(() => getByText('Wai Yan Hein'));
  expect(listData).toBeTruthy();
});
