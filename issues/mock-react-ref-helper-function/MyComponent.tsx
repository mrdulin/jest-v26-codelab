import React, { Component } from 'react';

export class MyComponent extends Component {
  private wrapperRef: HTMLDivElement | null = null;
  private contentRef: HTMLDivElement | null = null;
  componentDidMount() {
    const wrapperWidth = this.wrapperRef!.getBoundingClientRect().width;
    const contentWidth = this.contentRef!.getBoundingClientRect().width;
    console.log('wrapperWidth: ', wrapperWidth, ', contentWidth: ', contentWidth);
  }
  render() {
    return (
      <div className="wrapper" ref={(ref) => (this.wrapperRef = ref)}>
        <div className="content" ref={(ref) => (this.contentRef = ref)}></div>
      </div>
    );
  }
}
