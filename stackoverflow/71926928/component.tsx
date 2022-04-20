import React from 'react';
import { memo } from 'react';

export const MyComponent = memo(() => {
  return <div data-testid="test" />;
});
