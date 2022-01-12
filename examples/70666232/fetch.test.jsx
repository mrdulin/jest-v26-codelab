import React from 'react';
import { FetchPost } from './fetch';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Use Fetch tests', () => {
  it('Should fetch results and show/hide component', async () => {
    const mResponse = { json: jest.fn() };
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse);
    render(<FetchPost />);
    expect(screen.getByText(/fetch/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('fetch-result'));
    await waitFor(() => expect(screen.queryByText(/fetch/i)).not.toBeInTheDocument());
  });
});
