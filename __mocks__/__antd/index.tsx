import { SelectProps } from "antd/lib/select";
import React, { Component, FC } from "react";

class Select extends Component<SelectProps<any>> {
  static Option: FC = (props) => <option {...props} data-testid="mock-selectOption" />;

  render() {
    const { ...props } = this.props;
    // @ts-ignore
    return <select {...props} data-testid="mock-select" />;
  }
}
