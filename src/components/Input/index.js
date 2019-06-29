import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputStyle } from './styles';

const Input = ({
  name, type, placeholder = '', ...props
}) => (
  <Container>
    <InputStyle type={type} placeholder={placeholder} name={name} {...props} />
  </Container>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
