import React, { Component } from 'react';
import Input from './Input';

export default class MyComponent extends Component {
  refInput;
  render() {
    return (
      <Input
        id="foo"
        ref={(input) => {
          this.refInput = input;
        }}
      />
    );
  }
}
