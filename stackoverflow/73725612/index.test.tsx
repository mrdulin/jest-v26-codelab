import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { AAA } from '.';

describe('73725612', () => {
  test('should pass', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: 'hello world' }),
      })
    ) as jest.Mock;

    await act(async () => {
      render(<AAA />);
    });
  });
});
