import React, { Component } from 'react';
import { getChannel } from './api';

export class DocumentFromCounterCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workedOnDataTotalElementCount: 0,
    };
  }

  componentDidMount() {
    getChannel().then((res) => {
      if (!res) return;
      else {
        this.setState({ workedOnDataTotalElementCount: res.data.channel });
      }
    });
  }

  render() {
    return <div>{this.state.workedOnDataTotalElementCount}</div>;
  }
}
