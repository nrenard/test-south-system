import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/favorites';

import {
  HeaderStyles, Container, Logo, Nav,
} from './styles';

import logo from '../../images/logo.png';

const Header = () => {
  const { list } = useSelector(({ favorites }) => favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) dispatch(Creators.getFavorites());
  }, [list, dispatch]);

  const favoritesLength = list ? list.length : 0;

  return (
    <HeaderStyles>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="React Boilerplate" />
        </Link>

        <Nav>
          <NavLink to="/" exact>
            Livros
          </NavLink>
          <NavLink exact to="/favorites">
            Favoritos
            {' '}
            {`(${favoritesLength})`}
          </NavLink>
        </Nav>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
