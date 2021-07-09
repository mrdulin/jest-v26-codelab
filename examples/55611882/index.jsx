import React from 'react';

export default class Component extends React.Component {
  clickFunction() {
    console.log("Parent's Click fn");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickFunction} data-test-id="button" />
      </div>
    );
  }
}
