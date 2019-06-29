import styled from 'styled-components';

export const BuyButtonStyle = styled.a`
  background-color: ${({ theme }) => theme.errorColor};
  padding: 5px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
`;
