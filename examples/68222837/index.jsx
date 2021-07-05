import React from 'react';

export const Component = ({ asyncClick, syncClick }) => {
  function onClick() {
    console.log('clicked');
    syncClick();
    setTimeout(() => {
      asyncClick();
    }, 500000);
  }
  return <div data-testid="toBeClick" onClick={onClick}></div>;
};
