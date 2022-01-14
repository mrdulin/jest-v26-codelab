import axios from 'axios';
import React, { Component } from 'react';

async function apiCalls(url, method) {
  return axios({ url, method }).then((res) => res.data);
}

export class MyComponent extends Component {
  state = {
    allStatus: [],
  };
  componentDidMount() {
    this.getAllData();
  }
  getAllData = async () => {
    let res = await apiCalls(`http://localhost:3000/api/ContentState`, 'GET');
    if (res) {
      this.setState({ allStatus: res });
    }
  };
  render() {
    return <div>MyComponent</div>;
  }
}
