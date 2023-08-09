import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '.';
import userEvent from '@testing-library/user-event';

test('Does clicking the button change the input value?', async () => {
	render(<App />);

	const $button = screen.getByRole('button', { name: '입력' });

	await userEvent.click($button);
	await userEvent.click($button);

	let $passwordInput = (await screen.findByLabelText(`비밀번호`)) as HTMLInputElement;

	expect($passwordInput.value).toHaveLength(2);

	await userEvent.click($button);
	await userEvent.click($button);
	await userEvent.click($button);
	await userEvent.click($button);

	expect($passwordInput.value).toHaveLength(6);
	expect($passwordInput.value).toBe('111111');
});
