import React, { Component } from 'react';

export class MyComponent extends Component {
  state = {
    blah: '',
  };
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    const hello = 'assign';
    this.setState({ blah: 'blah' });
  }
  render() {
    return <div>{this.state.blah}</div>;
  }
}
