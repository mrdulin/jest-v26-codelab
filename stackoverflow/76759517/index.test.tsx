import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { App } from '.';

test.only('input field onChange', () => {
	render(<App />);
	const dropzone = screen.getByTestId('dropzone');
	expect(screen.getByText('Drag and drop files')).toBeInTheDocument();
	fireEvent.drop(dropzone, { dataTransfer: { files: [new File(['hello'], 'hello.png', { type: 'image/png' })] } });
	expect(screen.getByText('Selected File: hello.png')).toBeInTheDocument();
});
