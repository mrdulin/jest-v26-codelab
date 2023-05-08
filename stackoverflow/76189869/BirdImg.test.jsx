import React from 'react';
import { screen, waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BirdImg from './BirdImg';
import { fetchBirdImg } from './api';

jest.mock('./api');

const mockLoadedResponse = [{ urls: { thumb: 'https://via.placeholder.com/300x300.png?text=robin' } }];
test('shows the image', async () => {
  let _callback;
  const intersectionObserverEntries = [{ isIntersecting: true }];
  class IntersectionObserver {
    constructor(callback) {
      _callback = callback;
    }
    observe() {
      return null;
    }
    unobserve() {
      return null;
    }
    disconnect() {
      return null;
    }
  }

  fetchBirdImg.mockResolvedValueOnce(mockLoadedResponse);
  window.IntersectionObserver = IntersectionObserver;

  render(<BirdImg name="robin" />);
  const birdImage = screen.getByRole('img');
  expect(birdImage).toHaveAttribute('src', 'https://via.placeholder.com/200x300/86efac?text=Loading...');
  _callback(intersectionObserverEntries);
  await waitFor(() => {
    expect(birdImage).toBeInTheDocument();
    expect(birdImage).toHaveAttribute('src', 'https://via.placeholder.com/300x300.png?text=robin');
  });
});
