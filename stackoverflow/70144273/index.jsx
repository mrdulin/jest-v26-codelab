import React, { Component, createContext } from 'react';

export const CurrencyContext = createContext();

class CurrencyContextProvider extends Component {
  state = {
    selectedCurrency: 'USD',
  };
  setCurrency = (c) => {
    this.setState({ selectedCurrency: c });
  };

  render() {
    return (
      <CurrencyContext.Provider value={{ ...this.state, setCurrency: this.setCurrency }}>
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}

export default CurrencyContextProvider;
