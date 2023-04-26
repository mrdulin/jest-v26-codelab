import { render, screen } from '@testing-library/react';
import FileInput from './FileInput';
import React from 'react';

describe('76103230', () => {
  test('should pass', () => {
    const file = new File(['Hello world!'], 'hello.txt', { type: 'text/plain' });
    render(<FileInput fileList={[file]} />);
    const input = screen.getByTestId('uploader') as HTMLInputElement;
    expect(input.files).toHaveLength(1);
  });
});
