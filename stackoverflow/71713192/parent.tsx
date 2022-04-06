import React, { useState } from 'react';
import Button from './Button';
import Child from './Child';

const Parent = () => {
  const [disableButton, setDisableButton] = useState(true);

  return (
    <>
      <Button disabled={disableButton} />
      <Child onSelectionChange={(isDisabled) => setDisableButton(isDisabled)} />
    </>
  );
};

export default Parent;
