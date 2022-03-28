import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import TestAsync from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Test async', () => {
  it('increments counter after 0.5s', async () => {
    const { getByTestId } = render(<TestAsync />);

    fireEvent.click(getByTestId('button-up'));

    await waitFor(() => {
      const counter = getByTestId('counter');
      expect(counter).toHaveTextContent('1');
    });
  });
});
