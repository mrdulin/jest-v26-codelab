import { App } from './App';
import axios, { AxiosResponse } from 'axios';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('70450576', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should render category and joke', async () => {
    const mAxiosResponse = {
      data: { category: 'smart', joke: 'sam' },
    } as AxiosResponse;
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('category: smart')).toBeInTheDocument();
    expect(await screen.findByText('joke: sam')).toBeInTheDocument();
  });
});
