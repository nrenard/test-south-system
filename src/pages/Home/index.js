import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators } from "../../store/ducks/books";

import Header from "./partials/Header";
import BookList from "./partials/BookList";

import { Container } from "./styles";

const Home = () => {
  const books = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.list) dispatch(Creators.getBooks("react"));
  }, [books.list, dispatch]);

  return (
    <Container>
      <Header />
      <BookList />
    </Container>
  );
};

export default memo(Home);
