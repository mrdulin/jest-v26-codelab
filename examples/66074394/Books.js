import React from 'react';
import BookList from './BookList';

const Books = ({ books, searchField }) => {
  const filterBooks = () => {
    return books.filter((b) => b.name.includes(searchField));
  };

  return <BookList books={filterBooks()} />;
};

export default Books;
