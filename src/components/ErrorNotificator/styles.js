import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  position: fixed;
  width: 300px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.errorColor};
  padding: 10px;
`;

export const Header = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  margin-bottom: 20px;

  h4 {
    font-size: 24px;
    color: ${({ theme }) => theme.errorColor};
  }

  span {
    font-size: 10px;
  }
`;
