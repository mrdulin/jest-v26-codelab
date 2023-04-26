import { render, screen, fireEvent } from '@testing-library/react';
import { Game } from './Game';
import React from 'react';

describe('76106321', () => {
  it('validates if the user clicked on the correct spot', async () => {
    render(<Game src="" />);
    const gameImg = screen.getByAltText('game-screen');
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });

    Object.defineProperty(event, 'offsetX', { value: 400 });
    fireEvent(gameImg, event);
  });
});
