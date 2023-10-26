import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserForm from './UserForm';

test('it show two inputs and a button', () => {
	render(<UserForm />);
	const inputs = screen.getAllByRole('textbox');
	const button = screen.getByRole('button');

	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when form submitted', async () => {
	const mock = jest.fn();

	render(<UserForm onUserAdd={mock} />);
	const nameInput = screen.getByRole('textbox', { name: /name/i });
	const emailInput = screen.getByRole('textbox', { name: /email/i });
	await userEvent.type(nameInput, 'jane');
	await userEvent.type(emailInput, 'jane@jane.com');
	const button = screen.getByRole('button');
	await userEvent.click(button);

	expect(mock).toHaveBeenCalled();
	expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});
