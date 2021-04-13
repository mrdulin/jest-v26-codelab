import React, { useState } from 'react';
import { Flow } from './Flow';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Flow
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};
