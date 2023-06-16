import { render } from '@testing-library/react';
import React from 'react';
import { Input } from './library';

jest.mock('./library', () => {
	const originalLibrary = jest.requireActual('./library');
	const InputMock = () => <div data-testid='mock-input' />;
	Object.assign(InputMock, originalLibrary.Input);
	return {
		Input: InputMock,
	};
});

describe('76214614', () => {
	test('should pass', () => {
		const { asFragment } = render(<Input />);
		expect(Input.SIZE).toEqual({ md: 'md', lg: 'lg' });
		expect(asFragment().firstChild).toMatchInlineSnapshot(`
      <div
        data-testid="mock-input"
      />
    `);
	});
});
