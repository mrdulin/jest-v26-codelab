import React from 'react';
import { render, screen } from '@testing-library/react';
import MainSection from './MainSection';
import axios from 'axios';

test('Check if renders all the 20 items in the MainSection', async () => {
  const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({
    data: [
      { id: 1, title: 'a' },
      { id: 2, title: 'b' },
    ],
  });
  render(<MainSection />);
  const allBoxes = await screen.findAllByRole('listitem');
  expect(allBoxes).toHaveLength(2);
  axiosGetSpy.mockRestore();
});
