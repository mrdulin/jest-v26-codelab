import React from 'react';
import { Dispatch, Action, AnyAction } from 'redux';
import { connect } from 'react-redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

interface Props<A extends Action = AnyAction> {
  count: number;
  asd: number;
  dispatch: Dispatch<A>;
}

class Counter extends React.Component<Props> {
  state = { count: 0 };

  increment = () => {
    this.props.dispatch<{ type: typeof INCREMENT }>({ type: INCREMENT });
  };

  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  render() {
    return <div>counter</div>;
  }
}

type ICounterState = {
  count: number;
};

function mapStateToProps(state: ICounterState) {
  return {
    count: state.count,
    asd: 78,
  };
}

export default connect(mapStateToProps)(Counter);
