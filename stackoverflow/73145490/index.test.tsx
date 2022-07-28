import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Mycomponent } from '.';

describe('73145490', () => {
  it('renders the custom amount section when transaction amount custom amount radio checked ', () => {
    render(<Mycomponent />);
    const radioCustomAmount = screen.getAllByTestId('my-radio-');
    fireEvent.click(radioCustomAmount[0]);
  });
});
