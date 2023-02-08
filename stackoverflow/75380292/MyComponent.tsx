import React from 'react';

export type MyComponentProps = {
  newItems: number;
};
type MyComponentState = {
  title: string;
};
export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  state = {
    title: '',
  };
  componentDidUpdate(prevProps) {
    const { title } = this.state;
    const { newItems } = this.props;
    const { newItems: prevNewItems } = prevProps;

    if (prevNewItems !== newItems) {
      this.updateTitle(title, newItems); // testing if this method gets called
    }
  }

  updateTitle(title: string, newItems: MyComponentProps['newItems']) {}

  render() {
    return null;
  }
}
