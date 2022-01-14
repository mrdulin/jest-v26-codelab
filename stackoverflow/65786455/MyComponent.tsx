import React, { useState } from 'react';
import InputComponent from './InputComponent';

export function MyComponent({ actions, input }) {
  const [randomStateVariable, setRandomStateVariable] = useState('');

  const handleChange = (value) => setRandomStateVariable(value);

  return (
    <InputComponent
      handleChange={handleChange}
      input={{
        value: randomStateVariable || '',
      }}
    />
  );
}
