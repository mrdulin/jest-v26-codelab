import React, { useEffect } from 'react';

export const MyComp = () => {
  useEffect(
    () => () => {
      console.log('Unmounted');
    },
    []
  );
  return <div>Test</div>;
};
