import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header';
import { isHybridSelector } from './selectors';

export const UpgradeBlock = ({ isHybrid }) => {
  console.log('isHybrid: ', isHybrid);
  return <Fragment>{!isHybrid && <HeaderContainer />}</Fragment>;
};

const mapStateToProps = (state) => ({
  isHybrid: isHybridSelector(state),
});

export default connect(mapStateToProps)(UpgradeBlock);
