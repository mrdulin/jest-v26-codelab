import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

describe('App', () => {
  it('Reacts to url changes when touching the button', async () => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '',
      },
    });
    render(<App />);
    const button = await screen.findByLabelText('change');
    userEvent.click(button);
    const label = await screen.findByLabelText('URL Status');
    await waitFor(() => expect(label).toHaveTextContent('Changed!'));
  });
});
