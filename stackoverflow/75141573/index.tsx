import React, { useCallback, useState } from 'react';

export const A = () => {
  const [show, setShow] = useState(false);
  const handleToggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const displayUI = (
    <div>
      <i data-testid="editIcon" onClick={handleToggleShow} />
    </div>
  );

  const editUI = <form data-testid="form"></form>;

  return (
    <div>
      {show && editUI}
      {!show && displayUI}
    </div>
  );
};
