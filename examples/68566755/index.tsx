import React from 'react';

export function App() {
  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  return <input onKeyDown={handleKeyDown} />;
}
