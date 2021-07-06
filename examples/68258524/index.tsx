import React from 'react';

export const MyComponent = ({ renderNothing }) => {
  if (renderNothing) {
    return null;
  }
  return <div data-testid="my-component">Stuff</div>;
};
