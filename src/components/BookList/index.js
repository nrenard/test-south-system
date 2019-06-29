import React from 'react';
import PropTypes from 'prop-types';

import BookItem from '../BookItem';
import SimplePagination from '../SimplePagination';

import { Container, NotHasBooks } from './styles';

const BookList = ({ list, pagination, changePage }) => (
  <Container>
    {list && list.length ? (
      <>
        {list.map(book => (
          <BookItem book={book} key={book.id} />
        ))}
        {pagination && <SimplePagination {...pagination} changePage={changePage} />}
      </>
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
  pagination: PropTypes.object,
  changePage: PropTypes.func,
};

export default BookList;
