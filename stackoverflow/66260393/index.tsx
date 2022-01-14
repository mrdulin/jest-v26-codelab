import React from 'react';
import { getData } from './services/DataService';

export function withData(WrappedComponent, count) {
  return class extends React.Component {
    state = {
      data: [],
    };

    async componentDidMount() {
      this.setState({
        data: await getData(count),
      });
    }

    render() {
      const { data } = this.state;
      return data.length > 0 && <WrappedComponent data={data} />;
    }
  };
}
