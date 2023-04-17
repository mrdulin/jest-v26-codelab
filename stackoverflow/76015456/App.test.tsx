import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

describe('76015456', () => {
  test('should switch the response of the game to accepted', (done) => {
    render(<App />);
    const ulist = screen.getByText('GameID: 1').parentElement;
    if (!ulist) return done('can not find game with ID:1');
    const acceptButton = within(ulist).getByText('Accept');
    fireEvent.click(acceptButton);
    done();
  });
});
