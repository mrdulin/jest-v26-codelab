import React from 'react';
export function Flow({ isOpen, onClose }) {
  if (!isOpen) return null;
  return <div onClick={onClose}>close</div>;
}
