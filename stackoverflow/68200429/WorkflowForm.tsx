import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class WorkflowForm extends Component {
  render() {
    return <div>WorkflowForm</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    userID: state.data.userID,
    userObj: state.ui.userObj,
  };
};

export default withRouter(connect(mapStateToProps, null)(WorkflowForm));
