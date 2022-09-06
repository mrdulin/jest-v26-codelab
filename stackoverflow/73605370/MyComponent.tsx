import React, { useState } from 'react';
import Modal from './Modal';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} toggeleVisibility={() => setIsOpen(false)} content={<div>Modal content</div>} />
    </>
  );
};
