import React from 'react';
import Axios from 'axios';
import { render, screen } from '@testing-library/react';
import { TestComp } from './TestComp';

test('test', async () => {
  const getSpy = jest.spyOn(Axios, 'get').mockResolvedValueOnce({
    data: Array(401)
      .fill()
      .map((d, idx) => ({ req_id: idx })),
  });
  render(<TestComp />);
  const receivedRows = await screen.findAllByRole('row');
  expect(receivedRows.length > 400).toBeTruthy();
  getSpy.mockRestore();
});
