import React, { useState } from 'react';

export default function Example() {
  const [visible, setVisibility] = useState(false);

  const onSelection = () => {
    setVisibility(!visible);
  };

  return (
    <div>
      <div onMouseDown={() => onSelection()}>Click</div>
      {visible && <div>simple text</div>}
    </div>
  );
}
