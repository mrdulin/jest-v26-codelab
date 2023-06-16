import { render, screen } from '@testing-library/react';
import React from 'react';

describe('76269234', () => {
	test('should pass', () => {
		render(
			<div>
				<input type='text' />
				<input maxLength={1} type='text' />
			</div>,
		);
		const textbox = screen.getAllByRole('textbox') as HTMLInputElement[];
		console.log(textbox[1].maxLength);
		expect(textbox[1]).toHaveProperty('maxLength', 1);
	});
});
