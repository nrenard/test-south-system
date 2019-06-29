import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Title, Description,
} from './styles';

const BookItem = ({ book: { title, smallThumbnail, description } }) => (
  <Container>
    <Image src={smallThumbnail} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    smallThumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
