import { useEffect } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  myDispatchFunction: () => dispatch({ type: 'SOME_ACTION' }),
});
const mapStateToProps = ({ someStateProp }) => ({
  myStateProp: !!someStateProp,
});

const MyComp = ({ myDispatchFunction, myStateProp }) => {
  useEffect(() => {
    !!myStateProp && myDispatchFunction();
  }, []);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComp);
