import React, { Component } from 'react';

export interface MyComponentProps {
  show: boolean;
}
export interface MyComponentState {
  show: boolean;
}

export default class MyComponent extends Component<MyComponentProps, MyComponentState> {
  static getDerivedStateFromProps(props: MyComponentProps) {
    if ('show' in props) {
      return { show: props.show };
    }
    return null;
  }
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      show: props.show,
    };
  }
  onClick() {
    this.setState({ show: false });
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {show ? 'teresa teng' : ''}
        <button type="button" onClick={() => this.onClick()}>
          toggle
        </button>
      </div>
    );
  }
}
