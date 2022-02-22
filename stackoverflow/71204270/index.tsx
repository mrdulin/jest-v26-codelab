import React from 'react';

export function FunctionComponent() {
  return <div>function component</div>;
}

export class ClassComponent extends React.Component {
  render() {
    return <div>class component</div>;
  }
}
