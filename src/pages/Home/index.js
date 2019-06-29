import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/books';

import Header from './partials/Header';
import BookList from './partials/BookList';

import { Container } from './styles';

const Home = () => {
  const storeBooks = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!storeBooks.list) dispatch(Creators.getBooks('react'));
  }, [storeBooks.list, dispatch]);

  return (
    <Container>
      <Header />
      <BookList />
    </Container>
  );
};

export default memo(Home);
