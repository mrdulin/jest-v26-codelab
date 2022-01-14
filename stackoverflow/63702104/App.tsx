import * as React from 'react';

export default function App() {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    scrollContainerRef?.current?.scrollBy({ top: 0, left: 100 });
  };

  return (
    <div aria-label="wrapper" ref={scrollContainerRef}>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
