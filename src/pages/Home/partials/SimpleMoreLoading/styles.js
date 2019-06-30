import styled from 'styled-components';

import { simpleFlex } from '../../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  justify-content: center;
  width: 100%;
  padding: 30px 0;
`;

export const ButtonMore = styled.button`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px 20px;
  background-color: transparent;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
`;
