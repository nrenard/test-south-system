import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/books';

import Header from './partials/Header';
import BookList from '../../components/BookList';
import Loader from '../../components/Loader';

import { Container } from './styles';

const Home = () => {
  const { list, loading, pagination } = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) dispatch(Creators.getBooks({ query: 'reactjs' }));
  }, [list, dispatch]);

  const changePage = (page) => {
    dispatch(Creators.getBooks({ page }));
  };

  return (
    <Container>
      <Header />
      {list && !loading && <BookList list={list} pagination={pagination} changePage={changePage} />}
      {loading && !list && <Loader />}
    </Container>
  );
};

export default memo(Home);
