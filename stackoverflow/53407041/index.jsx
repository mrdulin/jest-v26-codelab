import React, { Component } from 'react';

export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prospectId: 1,
      validSalesForceId: true,
    };
    this.fetchProspectIdDetails = this.fetchProspectIdDetails.bind(this);
    this.handleProspectIdChange = this.handleProspectIdChange.bind(this);
  }

  fetchProspectIdDetails(e) {
    console.log('onblur');
    this.setState({ prospectId: e.target.value });
  }
  handleProspectIdChange(e) {
    console.log('onchange');
    this.setState({ validSalesForceId: !!e.target.value });
  }

  render() {
    return (
      <input
        type="text"
        onBlur={this.fetchProspectIdDetails}
        onChange={this.handleProspectIdChange}
        name="prospectId"
        value={this.state.prospectId}
      ></input>
    );
  }
}
