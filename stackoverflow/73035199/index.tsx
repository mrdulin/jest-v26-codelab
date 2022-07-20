import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const MyComponent = () => {
  const location = useLocation();
  useEffect(() => {
    console.log('location: ', location);
  }, [location]);

  return <div />;
};
