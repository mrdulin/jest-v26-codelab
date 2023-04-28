import React, { useState } from 'react'

const MainComponent = () => {
  const [value, setValue] = useState({ number: { value: "" } });

  const handleUpdate = (value) => {
    setValue({ number: { value } })
  }

  const { number } = value;
  return (
    <div>
      <input type='text' value={number.value} onChange={(e) => handleUpdate(e.target.value)} />
    </div>
  )
}

export default MainComponent;