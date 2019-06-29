import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { Creators } from '../../store/ducks/books';

import BuyButton from '../BuyButton';

import ModalDetail from './partials/ModalDetail';

import {
  Container,
  WrapperImage,
  Image,
  Title,
  Description,
  WrapperInfo,
  Actions,
  Favorite,
} from './styles';

let timeotOverflowReset = null;

const BookItem = ({ book }) => {
  const [detailModal, changeDetailModal] = useState(false);
  const dispatch = useDispatch();

  const {
    title, smallThumbnail, isSale, description, buyLink, amount, isFavorite, id,
  } = book;

  const openModal = () => {
    clearTimeout(timeotOverflowReset);
    document.body.style.overflow = 'hidden';
    changeDetailModal(true);
  };

  const closeModal = () => {
    timeotOverflowReset = setTimeout(() => {
      document.body.style.overflow = 'initial';
    }, 400);

    changeDetailModal(false);
  };

  const toggleFavorite = () => {
    if (isFavorite) dispatch(Creators.setFavorite(id));
    else dispatch(Creators.deleteFavorite(id));
  };

  return (
    <Container>
      <WrapperImage onClick={openModal}>
        <Image src={smallThumbnail} alt={title} />
      </WrapperImage>

      <Title onClick={openModal}>{title}</Title>
      {amount}
      <Description>{description}</Description>

      <WrapperInfo isSale={isSale}>
        <strong>{isSale ? 'disponível' : 'indisponível'}</strong>

        {isSale && (
          <Actions>
            <Favorite onClick={toggleFavorite}>
              {isFavorite ? 'desfavoritar' : 'favoritar'}
            </Favorite>
            <BuyButton link={buyLink} />
          </Actions>
        )}
      </WrapperInfo>

      <ModalDetail isActive={detailModal} book={book} closeModal={closeModal} />
    </Container>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    smallThumbnail: PropTypes.string.isRequired,
    isSale: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    buyLink: PropTypes.string,
  }).isRequired,
};

export default BookItem;
