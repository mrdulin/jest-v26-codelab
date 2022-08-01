import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { ModalComponent } from '.';

describe('ModalComponent', () => {
  test('should pass', async () => {
    render(<ModalComponent />);
    const openModalButton = screen.getByText(/open modal/i);
    fireEvent.click(openModalButton);
    expect(await screen.findByText('content')).toBeVisible();
    const dialog = screen.getByRole('dialog');
    fireEvent.keyDown(dialog, { keyCode: '27' });
    expect(await screen.findByText('content')).not.toBeVisible();
  });
});

