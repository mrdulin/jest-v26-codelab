import React, { Component } from 'react';

interface PageProps {
  foo: string;
  disabled?: boolean;
}
export default class Page extends Component<PageProps> {
  UNSAFE_componentWillReceiveProps(nextProps: PageProps) {
    console.log('this.props: ', this.props);
    console.log('nextProps: ', nextProps);
  }
  render() {
    return <button disabled={this.props.disabled}>Done</button>;
  }
}
