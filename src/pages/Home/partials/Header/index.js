import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Creators } from '../../../../store/ducks/books';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container, Form } from './styles';

const Header = () => {
  const [search, changeSearch] = useState('');
  const dispatch = useDispatch();

  const getBooks = (event) => {
    if (event) event.preventDefault();
    dispatch(Creators.getBooks({ query: search }));
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

        <Button>Buscar</Button>
      </Form>
    </Container>
  );
};

export default Header;
