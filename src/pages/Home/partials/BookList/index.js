import React from "react";
import { useSelector } from "react-redux";

import BookItem from "../../../../components/BookItem";

import { Container, NotHasBooks } from "./styles";

const ListBooks = () => {
  const { list } = useSelector(({ books }) => books);

  return (
    <Container>
      {list && list.length ? (
        list.map(book => <BookItem book={book} key={book.id} />)
      ) : (
        <NotHasBooks>Nenhum livro encntrado.</NotHasBooks>
      )}
    </Container>
  );
};

export default ListBooks;
