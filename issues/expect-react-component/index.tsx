import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export function Loading(props) {
  return <div {...props}>loading...</div>;
}

export class MyComponent extends Component {
  static show() {
    const container = document.createElement('div');
    container.classList.add('loading-container');
    document.body.appendChild(container);
    ReactDOM.render(<Loading className="loading" />, container);
  }
  render() {
    return <div>my component</div>;
  }
}
