import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';

describe("'Prime Number", () => {
  let homeInstance = renderer.create(<Home />).getInstance();

  it('should throw an error if called without an argument', () => {
    expect(() => homeInstance.primeNumber()).toThrow('Please pass a input value');
  });
})