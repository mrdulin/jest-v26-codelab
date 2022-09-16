import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { App } from '.';

describe('70048139', () => {
  test('should pass', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve('mock data'),
      })
    );
    render(<App />);
    // it will throw act(...) warning if below statement does not exist.
    // expect(await screen.findByText('mock data')).toBeInTheDocument();
  });
});
