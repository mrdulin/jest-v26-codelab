import React from 'react';
import { connect } from 'react-redux';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '131' };
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ value: this.maskPromoCode(e.target.value) });
  }

  maskPromoCode(value) {
    return '***';
  }

  render() {
    return (
      <>
        <input value={this.state.value} onChange={(e) => this.onChange(e)} />
      </>
    );
  }
}
export default connect(null, null)(Textbox);
