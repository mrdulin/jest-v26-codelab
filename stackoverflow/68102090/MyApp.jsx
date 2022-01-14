import React, { Component } from 'react';
import * as someLib from './someLibrary';

export default class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      locale: '',
    };
  }
  componentDidMount() {
    someLib.getUserContext((context) => {
      this.setState({
        userName: context.userName,
        locale: context.locale,
      });
    });
  }

  render() {
    const { userName } = this.state;
    return <div>{userName}</div>;
  }
}
