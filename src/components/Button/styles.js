import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div``;

export const ButtonStyles = styled.button`
  ${simpleFlex};
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 4px;
  padding: 15px;
  border: 0;
  font-weight: 900;
  transition: 0.2s opacity ease-in, 0.2s transform ease-in;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
