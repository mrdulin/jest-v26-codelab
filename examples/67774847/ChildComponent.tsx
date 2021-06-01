import React from 'react';

export default function ChildComponent({ callback }) {
  return <div onClick={callback}>child component</div>;
}
