import React from 'react';
import { useRef } from 'react';

export const CustomComp = ({ handleFileSelection = () => {} }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input className="d-none" onChange={handleFileSelection} type="file" ref={inputRef} accept="image/*" />
      <button type="button" onClick={handleClick}>
        Sample Button
      </button>
    </>
  );
};
