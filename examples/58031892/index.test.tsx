import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Page from './';

describe('58031892', () => {
  test('should pass', () => {
    const { rerender, getByText } = render(<Page foo="a" disabled />);
    const button = getByText('Done');
    expect(button).toBeDisabled();
    rerender(<Page foo="b" />);
    expect(button).toBeEnabled();
  });
});
