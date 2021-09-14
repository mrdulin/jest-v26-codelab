import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LazyLoad from './LazyLoad';

describe('69175296', () => {
  test('renders lazy component', async () => {
    const { getByText } = render(<LazyLoad />);
    const button = getByText(/Toggle Content/);
    fireEvent.click(button);
    await waitFor(() => expect(getByText('I am lazy !')).toBeInTheDocument());
  });
});
