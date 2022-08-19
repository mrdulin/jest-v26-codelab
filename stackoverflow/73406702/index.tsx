import React, { useState } from 'react';

export const ChildComponent = ({ state, setState }) => {
  return (
    <div
      onClick={() => {
        setState((prevState) => ({ ...prevState, name: 'Alice' }));
      }}
    >
      ChildComponent
    </div>
  );
};
