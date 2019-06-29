import React from 'react';
import { useSelector } from 'react-redux';

import BookItem from '../../../../components/BookItem';
import Pagination from '../../../../components/Pagination';

import { Container, NotHasBooks } from './styles';

const BookList = () => {
  const { list } = useSelector(({ books }) => books);

  return (
    <Container>
      {list && list.length ? (
        <>
          {list.map(book => (
            <BookItem book={book} key={book.id} />
          ))}
          <Pagination pages={10} />
        </>
      ) : (
        <NotHasBooks>Nenhum livro encntrado.</NotHasBooks>
      )}
    </Container>
  );
};

export default BookList;
