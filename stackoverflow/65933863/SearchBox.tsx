import React from 'react';

export class SearchBox extends React.Component {
  private timer: ReturnType<typeof setTimeout> | null = null;

  public asyncmethod() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      console.log('doSomething');
    }, 1000);
    console.log('using original class method');
    return 'search real text';
  }

  render() {
    return <div>{this.asyncmethod()}</div>;
  }
}
