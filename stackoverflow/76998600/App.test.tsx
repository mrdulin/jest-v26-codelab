import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom';

const server = setupServer(
	rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
		return res(ctx.json(['Hello World']));
	}),
);

beforeAll(() => {
	server.listen();
});

afterAll(() => {
	server.close();
});

test('empty', async () => {
	render(<App />);
	expect(screen.getByText('List of Users')).toBeInTheDocument();
	await screen.findByText('Hello World');

	expect(screen.getByText('Hello World')).toBeInTheDocument();
});
