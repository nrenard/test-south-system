import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
`;
