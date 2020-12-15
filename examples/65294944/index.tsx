import React, { useEffect } from 'react';

const determineColour = (myProp, updateMyState) => {
  if (myProp === 'blue') {
    updateMyState('azure');
  } else if (myProp === 'red') {
    updateMyState('crimson');
  }
};
export const MyComponent = ({ myProp, updateMyState }) => {
  useEffect(() => {
    determineColour(myProp, updateMyState);
  }, [myProp, updateMyState]);

  return <div>{myProp}</div>;
};
