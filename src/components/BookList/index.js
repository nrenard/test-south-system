import React from 'react';
import PropTypes from 'prop-types';

import BookItem from '../BookItem';

import { Container, NotHasBooks } from './styles';

const BookList = ({ list }) => (
  <Container>
    {list && list.length ? (
      list.map((book, index) => <BookItem book={book} key={index} />)
    ) : (
      <NotHasBooks>Nenhum livro encntrado.</NotHasBooks>
    )}
  </Container>
);

BookList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
