import React from 'react';

export default function Link({ onClick, children }) {
  return <div onClick={onClick}>{children}</div>;
}
