import styled from 'styled-components';

export const Container = styled.div``;

export const MessageError = styled.strong`
  color: ${({ theme }) => theme.errorColor};
  margin: 20px 0;
  display: block;
`;
