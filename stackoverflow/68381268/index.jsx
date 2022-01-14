import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className={`${this.props.nextAccent && 'accent'} button_next`}></button>
      </div>
    );
  }
}
