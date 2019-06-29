import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonStyles } from './styles';

const Button = ({ type, children }) => (
  <Container>
    <ButtonStyles type={type}>{children}</ButtonStyles>
  </Container>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;
