import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import Select from './Select';

// jest.unmock('antd');

describe('Select', () => {
  it('render successfully', async () => {
    jest.unmock('antd');
    const Select = (await import('./Select')).default
    const handleChange = jest.fn();
    const mockProps = {
      options: [],
      onChange: handleChange,
      selectedOption: '',
    };
    const { getByTestId } = render(<Select {...mockProps} />);
    // screen.debug();
    expect(getByTestId('asca')).toBeInTheDocument();
  });
});
