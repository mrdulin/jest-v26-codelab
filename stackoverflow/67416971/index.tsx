import React, { useEffect } from 'react';

export function App() {
  useEffect(() => {
    document.body.addEventListener('customEvent', onEvent);
  }, []);

  function onEvent(e) {
    console.log(e.detail);
  }

  return <div>app</div>;
}
