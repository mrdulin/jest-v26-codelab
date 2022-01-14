import React from 'react';
import { useLocation } from 'react-router-dom';

export function ShowStatus({ message, secret }) {
  return <div>{message}</div>;
}

export function MyComponent(props) {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const status = useQuery().get('status');

  if (status === 'success') {
    return <ShowStatus message="OK" secret={props.secret} />;
  } else {
    return <ShowStatus message="NOT OK" secret={props.secret} />;
  }
}
