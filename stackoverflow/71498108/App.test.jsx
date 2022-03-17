import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', function () {
  afterEach(cleanup);
  it('should render hello', function () {
    localStorage.token = 'dfdfdf';
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('hello')).toBeInTheDocument();
    localStorage.removeItem('token');
  });
  it('should not render hello', function () {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('hello')).not.toBeInTheDocument();
  });
});
