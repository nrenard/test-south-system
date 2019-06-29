import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  flex-direction: column;
  margin-top: 40px;
  max-width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 33%;
    padding-right: 20px;
    margin-top: 60px;
  }
`;

export const WrapperImage = styled.div`
  ${simpleFlex};
  justify-content: center;
  width: 130px;
  height: 185px;
  cursor: pointer;
`;

export const Image = styled.img`
  max-height: 100%;
`;

export const Title = styled.strong`
  ${simpleFlex};
  margin: 20px 0 10px;
  height: 40px;
  cursor: pointer;
`;

export const WrapperInfo = styled.div`
  ${simpleFlex};
  margin: 20px 0 0;

  strong {
    text-transform: uppercase;
    color: ${({ isSale, theme }) => (isSale ? theme.secondaryColor : theme.errorColor)};
    font-size: 14px;
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 55px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Actions = styled.div`
  ${simpleFlex};
  margin-left: 20px;

  a {
    background-color: ${({ theme }) => theme.errorColor};
    padding: 5px;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
  }
`;

export const Favorite = styled.b`
  text-transform: uppercase;
  font-size: 13px;
  margin-right: 20px;
  cursor: pointer;
`;
