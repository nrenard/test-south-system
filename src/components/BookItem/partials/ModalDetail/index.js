import React from 'react';
import PropTypes from 'prop-types';

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

import { WrapperInfo, Actions } from '../../styles';

const ModalDetail = ({
  isActive,
  closeModal,
  book: {
    thumbnail, title, publisher, isSale, buyLink, description,
  },
}) => (
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

            {isSale && (
              <Actions>
                <BuyButton link={buyLink} />
              </Actions>
            )}
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
  }).isRequired,
};

export default ModalDetail;
