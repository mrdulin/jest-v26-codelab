import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Popup from './';

describe('73407176', () => {
  test('should pass', () => {
    render(
      <Popup>
        <div id="content"></div>
      </Popup>
    );

    const button = screen.getByText('Got It');
    fireEvent.click(button);
    expect(button).not.toBeVisible();
  });
});
