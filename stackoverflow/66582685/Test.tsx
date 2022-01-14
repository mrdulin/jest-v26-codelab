import React from 'react';

export interface TestProps {}
export interface TestState {
  thisIsAState: number;
}

export class Test extends React.Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props);
    this.state = {
      thisIsAState: 1,
    };
  }
  updateState(num) {
    this.setState({ thisIsAState: num });
  }
  render() {
    return <div>{this.state.thisIsAState}</div>;
  }
}
