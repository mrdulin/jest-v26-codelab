import React from 'react';
import ChildComponent from './ChildComponent';

const SimpleFC: React.FC = () => {
  const callbackFunction = () => {
    // Do Stuffs
    console.log('Do Stuffs');
  };

  return <ChildComponent callback={callbackFunction} />;
};

export { SimpleFC };
