import React, { useState, memo } from 'react';
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
    title, smallThumbnail, isSale, description, buyLink, isFavorite, id,
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
    if (!isFavorite) dispatch(Creators.setFavorite({ ...book, isFavorite: true }));
    else dispatch(Creators.deleteFavorite(id));
  };

  return (
    <Container>
      <WrapperImage onClick={openModal}>
        <Image src={smallThumbnail} alt={title} />
      </WrapperImage>

      <Title onClick={openModal}>{title}</Title>

      {description && <Description>{description}</Description>}

      <WrapperInfo isSale={isSale}>
        <strong>{isSale ? 'disponível' : 'indisponível'}</strong>

        <Actions>
          <Favorite onClick={toggleFavorite}>{isFavorite ? 'desfavoritar' : 'favoritar'}</Favorite>

          {isSale && <BuyButton link={buyLink} />}
        </Actions>
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
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    buyLink: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default memo(BookItem);
