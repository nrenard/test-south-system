import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/books';

import Header from './partials/Header';
import BookList from '../../components/BookList';
import Loader from '../../components/Loader';

import { Container } from './styles';

const Home = () => {
  const { list, loading } = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) dispatch(Creators.getBooks('react'));
  }, [list, dispatch]);

  return (
    <Container>
      <Header />
      {list && !loading && <BookList list={list} />}
      {loading && !list && <Loader />}
    </Container>
  );
};

export default memo(Home);
