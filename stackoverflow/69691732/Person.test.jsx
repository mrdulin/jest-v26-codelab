import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Person from './Person';
import client from './service/Client';

jest.mock('./service/Client');

test('fetches image from random user API', async () => {
  client.fetchRandomUser.mockResolvedValueOnce({ picture: { large: 'personImage' } });
  render(<Person data-testid="person" />);
  const image = screen.getByRole('img');
  await waitFor(() => expect(image.src !== '').toBeTruthy());
  expect(client.fetchRandomUser).toHaveBeenCalledTimes(1);
});

// 2.
// test('fetches image from random user API', async () => {
//   jest.mock('./service/Client');
//   const Person = (await import('./Person')).default;
//   const client = (await import('./service/Client')).default;
//   client.fetchRandomUser.mockResolvedValueOnce({ picture: { large: 'personImage' } });
//   render(<Person data-testid="person" />);
//   const image = screen.getByRole('img');
//   await waitFor(() => expect(image.src !== '').toBeTruthy());
//   expect(client.fetchRandomUser).toHaveBeenCalledTimes(1);
// });
