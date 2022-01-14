import React from 'react';

export const AnotherComponent = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>another</div>;
});
