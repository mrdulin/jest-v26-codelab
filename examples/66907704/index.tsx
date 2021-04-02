import React, { useState } from 'react';

export const SearchForm = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" aria-label="Search" />
    </form>
  );
};
