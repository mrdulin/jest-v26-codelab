import React from 'react';

const BookCard = (book) => {
  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.price}</p>
    </div>
  );
};

export default BookCard;
