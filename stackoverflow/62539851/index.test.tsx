import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('62539851', () => {
	test('should pass', () => {
		render(
			<button aria-label='Close'>
				<svg>...</svg>
			</button>,
		);
		const button = screen.getByRole('button', { name: 'Close' });
		expect(button).toBeInTheDocument();
	});
});
