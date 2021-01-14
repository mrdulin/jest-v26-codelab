import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getData } from './actions/index';
import { AppState } from './store/store';
import GridItem from './component/GridItem';

function GridContainer() {
  const dispatch = useDispatch();
  const books = useSelector((state: AppState) => state);
  console.log('books:', books);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const bookList = (list: AppState) => {
    return list.map((book) => <GridItem key={book.id} data={book} />);
  };

  return <div className="book-container">{bookList(books)}</div>;
}

export default GridContainer;
