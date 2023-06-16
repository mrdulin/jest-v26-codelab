import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('testing onchange event for oshop', (done) => {
	render(<App />);
	const dropdElement = screen.queryByTestId('Oshop');
	expect(dropdElement).toHaveValue(undefined);
	if (!dropdElement) return done('select element not found');
	fireEvent.change(dropdElement, { target: { value: 'meat' } });
	expect(screen.getByTestId('Oshop')).toHaveValue('meat');
	done();
});
