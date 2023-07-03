import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('73783371', () => {
	test('should pass', () => {
		render(<div>ok</div>);
		expect(screen.getByText('ok')).toBeInTheDocument();
		expect(screen.getByText('ok')).toBeDefined();

		const el = document.createElement('div');
		expect(el).not.toBeInTheDocument();
		expect(el).toBeDefined();
	});
});
