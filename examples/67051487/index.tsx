import React, { useEffect } from 'react';

export const Component: React.FC = () => {
  function handleHashChanged(event) {
    console.log(event.newURL);
  }

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChanged);
    return () => window.removeEventListener('hashchange', handleHashChanged);
  });

  return <div>a component</div>;
};
