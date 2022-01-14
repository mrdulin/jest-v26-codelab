import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link to="/mission">Begin</Link>
      </div>
    );
  }
}
