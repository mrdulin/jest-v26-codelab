import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';

test('renders learn react link', async () => {
  Object.defineProperty(window, 'waitText', { value: () => Promise.resolve({ title: 'delectus aut autem' }) });
  render(<App />);
  const linkElement = await screen.findByText('delectus aut autem');
  expect(linkElement).toBeInTheDocument();
});
