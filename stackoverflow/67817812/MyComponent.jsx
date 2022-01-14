import React from 'react';

export function MyComponent() {
  const _onBoldClick = (e) => {
    e.preventDefault();
  };

  return (
    <button
      className="text-button-style"
      onMouseDown={(e) => {
        _onBoldClick(e);
      }}
    >
      B
    </button>
  );
}
