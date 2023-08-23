import { render, screen } from '@testing-library/react';
import Hero from '.';
import userEvent from '@testing-library/user-event';
import React from 'react';

it('scrolls to the next section when Explore Cars button is clicked', async () => {
	render(<Hero />);

	const scrollIntoViewMock = jest.fn();
	Element.prototype.scrollIntoView = scrollIntoViewMock;

	const buttonElement = screen.getByText('Explore Cars');
	await userEvent.click(buttonElement);

	expect(scrollIntoViewMock).toHaveBeenCalled();
});

it('scrolls to the next section when Explore Cars button is clicked', () => {
	render(<Hero />);

	const scrollIntoViewMock = jest.fn();
	Element.prototype.scrollIntoView = scrollIntoViewMock;

	expect(scrollIntoViewMock).not.toHaveBeenCalled();
});
