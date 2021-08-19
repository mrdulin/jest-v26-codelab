import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { ModalComponent } from '.';

describe('68829540', () => {
  test('should pass', async () => {
    expect.assertions(1);
    const { queryByText } = render(<ModalComponent />);
    fireEvent.click(queryByText('Open Modal'));
    await waitFor(() => expect(queryByText('Modal title')).toBeInTheDocument());
  });
});
