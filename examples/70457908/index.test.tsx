import { render, waitFor } from '@testing-library/react';
import React from 'react';
import ReCaptcha from './';

describe('ReCaptcha', () => {
  test('should pass', async () => {
    const logSpy = jest.spyOn(console, 'log');
    render(<ReCaptcha />);
    await waitFor(() => expect(logSpy).toBeCalledWith('we are sucessful'));
  });
});
