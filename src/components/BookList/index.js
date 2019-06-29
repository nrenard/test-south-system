import React from 'react';
import PropTypes from 'prop-types';

import BookItem from '../BookItem';
import Pagination from '../Pagination';

import { Container, NotHasBooks } from './styles';

const BookList = ({ list, pagination }) => (
  <Container>
    {list && list.length ? (
      <>
        {list.map(book => (
          <BookItem book={book} key={book.id} />
        ))}
        {pagination && <Pagination {...pagination} />}
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
};

export default BookList;
