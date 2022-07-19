import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios, { CancelTokenSource } from 'axios';
import React from 'react';
import { MyComponent } from './MyComponent';

describe('73010660', () => {
  test('should cancel the request', async () => {
    const cancelTokenSource: CancelTokenSource = {
      cancel: jest.fn(),
      token: { promise: Promise.resolve({ message: '' }), throwIfRequested: jest.fn() },
    };
    jest.spyOn(axios.CancelToken, 'source').mockReturnValueOnce(cancelTokenSource);
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: 'joe' });
    const { unmount } = render(<MyComponent />);
    expect(await screen.findByText(/joe/)).toBeInTheDocument();
    expect(cancelTokenSource.cancel).not.toBeCalled();
    unmount();
    expect(cancelTokenSource.cancel).toBeCalledWith('axios request cancelled');
  });
});
