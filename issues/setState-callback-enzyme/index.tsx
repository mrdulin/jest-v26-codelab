import React from 'react';

interface MyComponentState {
  count: number;
}
interface ButtonProps {
  onClick(): void;
}

interface MyComponentProps {
  callback(): void;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        click me
      </button>
    );
  }
}

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 }, () => {
      this.props.callback();
    });
  }

  render() {
    return <Button onClick={this.handleClick}>click me</Button>;
  }
}
