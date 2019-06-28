import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Creators } from "../../../../store/ducks/books";

import Input from "../../../../components/Input";

import { Container, Form } from "./styles";

const Header = () => {
  const [search, changeSearch] = useState("");
  const dispatch = useDispatch();

  const getBooks = event => {
    if (event) event.preventDefault();
    dispatch(Creators.getBooks(search));
  };

  return (
    <Container>
      <Form onSubmit={getBooks}>
        <Input
          name="search"
          placeholder="Buscar por..."
          value={search}
          onChange={({ target }) => changeSearch(target.value)}
        />
      </Form>
    </Container>
  );
};

export default Header;
