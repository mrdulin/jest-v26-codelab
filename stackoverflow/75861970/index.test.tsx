import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Test } from './';

describe('Test component test', () => {
  const result = {
    data: {
      id: 1,
      attributes: {
        titles: { en: 'Fullmetal Alchemist' },
        synopsis: 'After losine.',
      },
    },
  };
  let jsonResolve;
  (global as any).fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        new Promise((resolve) => {
          jsonResolve = resolve;
        }),
    })
  );
  it('should show "bye" text before showing "hi" text when data fetching is don', async () => {
    const user = userEvent.setup();
    render(<Test />);
    expect(screen.getByText(/hi/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/bye/i)).toBeInTheDocument();
    jsonResolve(result);
    await waitFor(() => {
      expect(screen.getByText(/hi/i)).toBeInTheDocument();
    });
  });
});
