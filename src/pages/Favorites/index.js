import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/favorites';

import { Container } from './styles';

const Home = () => {
  const booksFavorites = useSelector(({ favorites }) => favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!booksFavorites.list) dispatch(Creators.getFavorites());
  }, [booksFavorites.list, dispatch]);
  console.log('booksFavorites: ', booksFavorites);
  return <Container>aeeoo</Container>;
};

export default memo(Home);
