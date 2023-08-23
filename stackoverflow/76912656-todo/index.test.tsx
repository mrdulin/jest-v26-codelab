import React from 'react';
import userEvent from '@testing-library/user-event';
import { FavoriteNumber } from '.';
import { render, screen } from '@testing-library/react';

test('Renders an error message when has a number outside of range', async () => {
	const user = userEvent.setup();
	render(<FavoriteNumber></FavoriteNumber>);

	const input = screen.getByLabelText(/favorite number/i);
	await user.type(input, '6');

	const theNumber = screen.getByRole(/not/i);

	screen.debug(theNumber);
	screen.debug(input);
});
