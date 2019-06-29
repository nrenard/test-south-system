import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
  HeaderStyles, Container, Logo, Nav,
} from './styles';

import logo from '../../images/logo.png';

const Header = () => (
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
          Favoritos (0)
        </NavLink>
      </Nav>
    </Container>
  </HeaderStyles>
);

export default Header;
