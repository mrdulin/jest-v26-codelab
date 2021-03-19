import React from 'react';

const ChildButton = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.onClick}>{props.name}</button>
    </React.Fragment>
  );
};

export default ChildButton;
