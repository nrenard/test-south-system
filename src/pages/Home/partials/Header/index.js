import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../../../store/ducks/books';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Loader from '../../../../components/Loader';

import { Container, Form } from './styles';

const Header = () => {
  const [search, changeSearch] = useState('');

  const { loading } = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  const getBooks = (event) => {
    if (event) event.preventDefault();
    if (loading) return false;
    dispatch(Creators.getBooks({ query: search }));
    changeSearch('');
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

        <Button>{!loading ? 'Buscar' : <Loader />}</Button>
      </Form>
    </Container>
  );
};

export default Header;
