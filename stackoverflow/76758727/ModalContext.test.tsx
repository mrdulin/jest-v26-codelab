import { act, render } from '@testing-library/react';
import React from 'react';
import { ModalProvider, useModalContext } from './ModalContext';

describe('76758727', () => {
	test('should pass', () => {
		let ctx;
		const Dummy = () => {
			ctx = useModalContext();
			return null;
		};

		render(<Dummy />, { wrapper: ({ children }) => <ModalProvider>{children}</ModalProvider> });
		expect(ctx.showModal).toBeFalse();
		act(() => {
			ctx.setShowModal(true);
		});
		expect(ctx.showModal).toBeTrue();
	});
});
