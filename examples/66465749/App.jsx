import React, { Component } from 'react';
import axios from 'axios';

const axiosGetTest = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000,
  headers: {},
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { name: '' } };
  }
  componentDidMount() {
    axiosGetTest.get('/api/user').then((user) => this.setState({ user }));
  }
  render() {
    const { user } = this.state;
    return <div>{user.name}</div>;
  }
}
