import React, { Component } from 'react';

const MyContext = React.createContext({
  otherFunction: (value) => {
    console.log(value);
  },
});

export class MyComponent extends Component {
  static contextType = MyContext;
  myFunction() {
    this.context.otherFunction('shouldBecorrectValue');
  }
  render() {
    return <div>my component</div>;
  }
}
