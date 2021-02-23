import React, { ChangeEvent, cloneElement, Component, isValidElement } from 'react';

interface MyComponentProps {
  children?: React.ReactNode;
}

export default class MyComponent extends Component<MyComponentProps> {
  render() {
    const { children } = this.props;

    const items = React.Children.map(children, (element, index) => {
      if (!isValidElement(element)) {
        return element;
      }
      return cloneElement(element, {
        key: index,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          element.props.onChange && element.props.onChange(e);
          // do other things
          console.log('handle change event');
        },
      });
    });
    return <div>{items}</div>;
  }
}
