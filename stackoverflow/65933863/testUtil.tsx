import React from 'react';

export class MockedSearchBox extends React.Component {
  public asyncMethod() {
    console.log('using mocked class method');
    return 'Search mock text';
  }
  render() {
    return <div>{this.asyncMethod()}</div>;
  }
}
