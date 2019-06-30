import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../../../store/ducks/books';

import Loader from '../../../../components/Loader';

import { Container, ButtonMore } from './styles';

const SimpleMoreLoading = () => {
  const {
    list,
    loading,
    pagination: { hasMore },
  } = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  const giveMeMore = () => {
    dispatch(Creators.getBooks({ giveMeMore: true }));
  };

  return (
    !!list.length && (
      <Container>
        {hasMore ? (
          <>{!loading ? <ButtonMore onClick={giveMeMore}>Ver Mais</ButtonMore> : <Loader />}</>
        ) : (
          'Não há mais livros nessa segmentação.'
        )}
      </Container>
    )
  );
};
export default SimpleMoreLoading;
