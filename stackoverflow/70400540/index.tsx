import React, { useState } from 'react';

export interface SpecialEvent extends Event {
  detail?: string;
}

export function Example() {
  const [changed, setChanged] = useState(false);
  React.useEffect(() => {
    document.addEventListener('specialEvent', handleChange);
    return () => {
      document.removeEventListener('specialEvent', handleChange);
    };
  });
  const handleChange = (event: SpecialEvent) => {
    console.log(event);
    setChanged((pre) => !pre);
  };
  return <div>{changed ? 'a' : 'b'}</div>;
}
