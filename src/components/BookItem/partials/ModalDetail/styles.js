import styled from 'styled-components';

import { simpleFlex } from '../../../../styles/mixins';

export const ModalWrapper = styled.div`
  ${simpleFlex};
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in, visibility 0.4s ease-in;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;

export const CloseModal = styled.strong`
  cursor: pointer;
  text-transform: uppercase;
  position: absolute;
  font-size: 10px;
  top: 20px;
  right: 20px;
`;

export const Container = styled.div`
  ${simpleFlex};
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  width: 80%;
  overflow: auto;
  color: #000;
  padding: 30px 20px;
`;

export const WrapperHader = styled.div`
  ${simpleFlex};
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const RightHeader = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-left: 30px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 5px;
`;

export const Image = styled.img`
  max-width: 300px;
  box-shadow: 0 0 10px #000;
`;

export const Publisher = styled.p``;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 40px;
`;

export const Description = styled.p`
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
  color: #333;
`;
