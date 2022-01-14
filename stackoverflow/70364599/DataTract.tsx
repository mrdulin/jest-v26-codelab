import React, { Component } from 'react';

declare global {
  interface Window {
    globalData: any;
    analyticsData: any;
  }
}

interface DataTrackProps {
  enableDataTrack?: boolean;
}
export class DataTrack extends Component<DataTrackProps> {
  dataTrack = {};
  componentDidMount() {
    this.setData();
    if (this.props.enableDataTrack) {
      this.pushData();
    }
  }

  private setData() {
    window.globalData = { app_platform: 'I' };
  }

  private getData() {
    this.dataTrack = {
      command: 'EVENT',
      name: 'data',
      data: {
        app_embed_name: 'it',
      },
    };
    return this.dataTrack;
  }

  private pushData() {
    window.analyticsData = window.analyticsData || [];
    window.analyticsData.push(this.getData());
  }
  render() {
    return <div>data track</div>;
  }
}
