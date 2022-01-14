import React, { useEffect, useRef } from 'react';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(ref.current?.offsetWidth);
  }, [ref]);
  return <div ref={ref}>app</div>;
}
