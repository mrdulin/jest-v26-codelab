import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { CreateTodo } from './CreateTodo';

test('adding item test', async () => {
	const mock = jest.fn();
	render(<CreateTodo onAdd={mock} />);
	const input = screen.getByRole('textbox');
	await userEvent.type(input, 'hello{enter}');
	expect(mock).toHaveBeenCalled();
});
