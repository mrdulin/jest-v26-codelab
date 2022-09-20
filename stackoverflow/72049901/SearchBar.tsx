import React, { useState } from 'react';

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input onChange={handleSearch} />
      {search.length > 0 && <div>...</div>}
    </>
  );
};
