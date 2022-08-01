import React from 'react';

export default function FormCheckBox({ onChange, isChecked }) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked);
  };

  return <input checked={isChecked} type="checkbox" onChange={handleChange} />;
}
