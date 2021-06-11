import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestPage from './TestPage';

const allUsers = [{ title: 'User' }];

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/todos/1', async (req, res, ctx) => {
    return res(ctx.json(allUsers));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('67902700', () => {
  test('loads and displays greeting', async () => {
    render(<TestPage />);
    await screen.findByText('User');
    screen.debug();
  });
});
