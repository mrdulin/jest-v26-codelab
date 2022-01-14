import React from 'react';

function Input(props) {
  return <input {...props} />;
}

const SearchBar = (props) => {
  return <Input type="search" data-test="search" onChange={(e) => props.onSearch(e.target.value)} />;
};

export default SearchBar;
