import React from 'react';
import { SortIndicator, ExchangeRate } from './Elements';

export default class SearchListView extends React.Component {
  render() {
    return (
      <>
        <SortIndicator></SortIndicator>
        <ExchangeRate></ExchangeRate>
      </>
    );
  }
}
