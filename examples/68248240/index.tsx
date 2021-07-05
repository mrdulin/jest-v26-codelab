import React from 'react';
import { useLocation } from 'react-router-dom';

export function Test() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('value');
  console.log('query: ', query);

  return <div> Welcome </div>;
}
