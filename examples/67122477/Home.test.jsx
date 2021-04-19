import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Home';
import services from './services/patientServices';

jest.mock('./services/patientServices');

describe('67122477', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const mResult = { data: [{ name: 'teresa teng', id: '1' }] };
    services.patientSets.mockResolvedValueOnce(mResult);
    render(<Home />);
    const matched = await screen.findByText(/teresa teng/);
    expect(matched).toBeInTheDocument();
  });
});
