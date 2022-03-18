import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const TestWrappers = ({ children }: React.PropsWithChildren<any>): JSX.Element => (
  <BrowserRouter>{children}</BrowserRouter>
);

const Home = () => <div>home</div>;

test('Renders home page', () => {
  render(<Home />, { wrapper: TestWrappers });
  expect(screen.getByText(/home/)).toBeTruthy();
});
