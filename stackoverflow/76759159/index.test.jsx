import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { App } from './index';

test.only('input field onChange', async () => {
	render(<App />);
	const input = screen.getByTestId('input-field');
	expect(input).toBeInTheDocument();
	const file = new File(['hello'], 'hello.png', { type: 'image/png' });

	await userEvent.upload(input, file);
	expect(screen.getByText('Selected File: hello.png')).toBeInTheDocument();
});
