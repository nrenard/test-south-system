import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/books';

import Header from './partials/Header';
import BookList from '../../components/BookList';
import Loader from '../../components/Loader';

import SimpleMoreLoading from './partials/SimpleMoreLoading';

import { Container } from './styles';

const Home = () => {
  const { list, pagination } = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) dispatch(Creators.getBooks({ query: 'react' }));
  }, [list, dispatch]);

  return (
    <Container>
      <Header />
      {list ? (
        <>
          <BookList list={list} pagination={pagination} />
          <SimpleMoreLoading />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default memo(Home);
