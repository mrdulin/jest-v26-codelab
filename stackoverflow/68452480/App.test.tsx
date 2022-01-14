import React from 'react';
import user from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';
import { App } from './App';

const someValues = [{ name: 'teresa teng' }];

describe('68452480', () => {
  test('should pass', async () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const str = JSON.stringify(someValues);
    const blob = new Blob([str]);
    const file = new File([blob], 'values.json', {
      type: 'application/JSON',
    });
    File.prototype.text = jest.fn().mockResolvedValueOnce(str);
    const input = getByTestId('upInput');
    user.upload(input, file);
    await waitFor(() => expect(queryByTestId('handler')).toBeTruthy());
  });
});
