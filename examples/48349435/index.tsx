import React, { Component } from 'react';

export class SomeCustomReactElement extends Component {
  doSomething() {
    console.log('do somthing');
  }
  render() {
    return <span>some custom react element</span>;
  }
}

export default class MyComponent extends Component {
  handleRef = (ref: SomeCustomReactElement) => {
    console.log('handle ref');
    ref.doSomething();
  };
  render() {
    return (
      <div>
        <SomeCustomReactElement ref={this.handleRef} />
      </div>
    );
  }
}
