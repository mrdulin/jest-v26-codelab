import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props}>click me</button>;

describe('76118663', () => {
	let rerender: ReturnType<typeof render>['rerender'];
	const props: React.ButtonHTMLAttributes<HTMLButtonElement> = { type: 'button' };
	beforeEach(() => {
		rerender = render(<Button {...props} />).rerender;
	});
	test('should override button disabled prop', () => {
		expect(screen.queryByRole('button')).toBeEnabled();
		rerender(<Button {...props} disabled />);
		expect(screen.queryByRole('button')).toBeDisabled();
	});

	test('should override button type prop and reset disabled prop', () => {
		rerender(<Button {...props} type='submit' />);
		expect(screen.queryByRole('button')).toBeEnabled();
		expect(screen.queryByRole('button')).toHaveAttribute('type', 'submit');
	});
});
