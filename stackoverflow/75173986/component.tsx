import React from 'react';
import { connect } from 'react-redux';
import { myAction } from './actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('Your mock myFunction is here:', ownProps.myFunction);
  return {
    myFunction: (data) => dispatch(myAction(data)),
  };
};

const Component = ({ buttonText, myFunction }) => (
  <button data-testid="test" onClick={() => myFunction(123)}>
    {buttonText}
  </button>
);

export default connect(null, mapDispatchToProps)(Component);
