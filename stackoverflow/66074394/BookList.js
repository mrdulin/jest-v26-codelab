import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return books.map((b) => {
    return <BookCard book={b} />;
  });
};

export default BookList;
