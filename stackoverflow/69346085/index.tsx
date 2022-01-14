import React, { Component } from 'react';

export default class AppRoutes extends Component {
  componentDidMount() {
    window.addEventListener('beforeunload', (event) => {
      this.handleBeforeUnload();
    });
  }

  handleBeforeUnload() {}

  render() {
    return <div>app routes</div>;
  }
}
