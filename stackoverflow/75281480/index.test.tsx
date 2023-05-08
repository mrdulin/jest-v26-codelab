import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

test('Show a file selection dialog and test file selection', async () => {
  const user = userEvent.setup();
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" />
    </div>
  );

  const fileInput = screen.getByLabelText(/upload file/i) as HTMLInputElement;
  expect(fileInput).toBeInTheDocument();

  await user.upload(fileInput, file);

  expect(fileInput.files).toHaveLength(1);
  expect(fileInput.files?.item(0)).toBe(file);
});
