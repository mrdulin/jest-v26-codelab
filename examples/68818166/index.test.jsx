import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { UploadImageModal } from './';
import { getBase64, hasMinPicDimension } from './helpers';

jest.mock('./helpers');

describe('68818166', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should upload file', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    jest.spyOn(document, 'querySelector').mockReturnValueOnce({ files: [file] });
    const logSpy = jest.spyOn(console, 'log');
    getBase64.mockResolvedValueOnce('mocked file base64 string');
    hasMinPicDimension.mockImplementationOnce((file) => file);
    render(<UploadImageModal />);
    fireEvent.change(screen.queryByTestId('fileinput'));
    await waitFor(() =>
      expect(logSpy).toBeCalledWith('picFile: ', {
        mimeType: 'image/png',
        base64: 'mocked file base64 string',
        file,
      })
    );
  });

  test('should handle error if file is invalid', async () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    jest.spyOn(document, 'querySelector').mockReturnValueOnce({ files: [file] });
    getBase64.mockResolvedValueOnce('mocked file base64 string');
    hasMinPicDimension.mockRejectedValueOnce(new Error('Image is too small'));
    render(<UploadImageModal />);
    await act(async () => {
      fireEvent.change(screen.queryByTestId('fileinput'));
    });
    await waitFor(() => {
      expect(screen.findByText(/Image is too small/)).toBeTruthy();
    });
  });
});
