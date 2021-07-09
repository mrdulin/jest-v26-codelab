import React from 'react';
import history from './history';

export default function SampleCode() {
  const onClick = () => history.push(`/login`);
  return <button onClick={onClick}>Click</button>;
}
