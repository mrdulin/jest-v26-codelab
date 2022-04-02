import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MyComp } from './';

describe('MyComp', () => {
  test('should pass', async () => {
    render(<MyComp />);
    const listContainer = screen.getByTestId('list');
    expect(listContainer).toBeInTheDocument();
    const queryButton = screen.getByRole('button');

    userEvent.click(queryButton);
    await waitForElementToBeRemoved(() => screen.queryByTestId('list'));
  });
});
