import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const NotHasBooks = styled.strong`
  margin-top: 30px;
`;
