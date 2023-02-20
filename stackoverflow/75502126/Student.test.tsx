import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import React from 'react';
import { Student } from './Student';

describe('75502126', () => {
  test('should pass', async () => {
    const axioGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({ data: [{ subjectName: 'a' }] });
    render(<Student stRecord={{ studentNumber: 1 }} />);
    expect(await screen.findByText('a')).toBeInTheDocument();
    axioGetSpy.mockRestore();
  });
});
