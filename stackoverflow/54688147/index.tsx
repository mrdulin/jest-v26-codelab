import React, { Component } from 'react';

function isTouchEvent(e: React.TouchEvent | React.MouseEvent): e is React.TouchEvent {
  return e && 'touches' in e;
}

function isMouseEvent(e: React.TouchEvent | React.MouseEvent): e is React.MouseEvent {
  return e && 'screenX' in e;
}

export default class MyComponent extends Component {
  onStart = (event: React.TouchEvent | React.MouseEvent) => {
    event.persist();
    if (isTouchEvent(event)) {
      console.log(event.touches);
    }
    if (isMouseEvent(event)) {
      console.log(event.screenX);
    }
  };

  render() {
    return <div>my component</div>;
  }
}
