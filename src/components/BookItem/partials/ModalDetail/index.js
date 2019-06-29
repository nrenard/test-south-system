import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Creators } from '../../../../store/ducks/books';

import BuyButton from '../../../BuyButton';

import {
  ModalWrapper,
  CloseModal,
  Container,
  WrapperHader,
  Image,
  Publisher,
  RightHeader,
  Title,
  DescriptionWrapper,
  Description,
} from './styles';

import { WrapperInfo, Actions, Favorite } from '../../styles';

const ModalDetail = ({ isActive, closeModal, book }) => {
  const dispatch = useDispatch();

  const {
    thumbnail, title, publisher, isSale, buyLink, description, isFavorite, id,
  } = book;

  useEffect(() => () => {
    document.body.style.overflow = 'initial';
  }, []);

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(Creators.setFavorite(book));
    } else {
      dispatch(Creators.deleteFavorite(id));
    }
  };

  return (
    <ModalWrapper isActive={isActive} onClick={closeModal}>
      <Container onClick={event => event.stopPropagation()}>
        <CloseModal onClick={closeModal}>fechar</CloseModal>

        <WrapperHader>
          <Image src={thumbnail} alt={title} />

          <RightHeader>
            <Title>{title}</Title>
            <Publisher>{publisher}</Publisher>

            <WrapperInfo isSale={isSale}>
              <strong>{isSale ? 'disponível' : 'indisponível'}</strong>

              <Actions>
                <Favorite onClick={toggleFavorite}>
                  {isFavorite ? 'desfavoritar' : 'favoritar'}
                </Favorite>
                {isSale && <BuyButton link={buyLink} />}
              </Actions>
            </WrapperInfo>
          </RightHeader>
        </WrapperHader>

        <DescriptionWrapper>
          <strong>Descrição</strong>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </Container>
    </ModalWrapper>
  );
};

ModalDetail.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  book: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isSale: PropTypes.bool.isRequired,
    buyLink: PropTypes.string,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ModalDetail;
