import { shallow } from 'enzyme';
import React from 'react';
import { DataTrack } from './DataTract';

describe('DataTract', () => {
  afterEach(() => {
    window.globalData = undefined;
    window.analyticsData = undefined;
  });
  test('should push and set data', () => {
    shallow(<DataTrack enableDataTrack />);
    expect(window.globalData).toEqual({ app_platform: 'I' });
    expect(window.analyticsData).toEqual([
      {
        command: 'EVENT',
        name: 'data',
        data: {
          app_embed_name: 'it',
        },
      },
    ]);
  });

  test('should set data', () => {
    shallow(<DataTrack enableDataTrack={false} />);
    expect(window.globalData).toEqual({ app_platform: 'I' });
    expect(window.analyticsData).toBeUndefined();
  });
});
