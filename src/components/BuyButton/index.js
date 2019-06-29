import React from 'react';
import PropTypes from 'prop-types';

import { BuyButtonStyle } from './styles';

const BuyButton = ({ link }) => (
  <BuyButtonStyle href={link} target="_blank" rel="noopener noreferrer">
    comprar
  </BuyButtonStyle>
);

BuyButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BuyButton;
