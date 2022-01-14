import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

describe('test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });
  it('happy render', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('renders after search', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        items: [
          { id: 1, name: 'react' },
          { id: 2, name: 'jestjs' },
        ],
      },
    });
    render(<App />);
    userEvent.type(screen.getByTestId('search'), 'vue');
    act(() => {
      jest.runAllTimers();
    });
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
  });
});
