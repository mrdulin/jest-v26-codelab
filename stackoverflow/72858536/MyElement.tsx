import React, { useState } from 'react';

export const MyElement = ({ onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = (event) => {
    event.stopPropagation();
    setIsRemoving(true);
    onRemove().finally(() => setIsRemoving(false));
  };

  return (
    <>
      <button onClick={handleRemove}>Remove</button>
      <p>{isRemoving ? 'busy' : 'selected'}</p>
    </>
  );
};
