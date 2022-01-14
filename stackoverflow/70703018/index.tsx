import React, { Fragment } from 'react';

export const layoutWrap = <P extends object>(Wrapper: React.ComponentType<P>) =>
  class ResponsiveWrap extends React.Component<P> {
    render() {
      return (
        <Fragment>
          <Wrapper {...this.props} />
        </Fragment>
      );
    }
  };
