import React from 'react';

export default function InputComponent({ handleChange, input }) {
  return <input onChange={handleChange} value={input.value}></input>;
}
