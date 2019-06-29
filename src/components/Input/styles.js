import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 15px;
  height: 50px;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 14px;

  &::placeholder {
    color: #fff;
  }
`;
