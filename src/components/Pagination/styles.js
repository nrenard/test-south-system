import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
`;

export const List = styled.ul`
  ${simpleFlex};
`;

export const Item = styled.li`
  ${simpleFlex};
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;
