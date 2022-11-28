import React, { Component } from "react";

export default class Home extends Component {
  primeNumber = num => {
    let isPrime = false;
    if (num === undefined) {
      throw new Error('Please pass a input value');
    } else if (typeof num !== 'number') {
      throw new Error('The input value should be a integer only');
    } else if (num < 0) {
      throw 'Negative integers cannot be prime';
    } else if (num == 0 || num == 1) {
      throw new Error('O or 1 is neither prime not composite number');
    } else if (num > 1) {
      for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) return 'Its a prime number';
      else return 'Its not a prime number';
    }
  };


  render() {
    return (
      <div>home</div>
    )
  }
}