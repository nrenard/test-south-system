import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import BookList from '../../components/BookList';
import Header from './partials/Header';

import { Container } from './styles';

const Favorites = () => {
  const { list } = useSelector(({ favorites }) => favorites);

  return (
    <Container>
      <Header />
      <BookList list={list} />
    </Container>
  );
};

export default memo(Favorites);
