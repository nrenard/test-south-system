import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  margin-top: 30px;
`;

export const List = styled.ul`
  ${simpleFlex};
  flex-wrap: wrap;
`;

export const Item = styled.li`
  ${simpleFlex};
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  color: ${({ active, theme }) => (active ? theme.secondaryColor : '#fff')};
`;
