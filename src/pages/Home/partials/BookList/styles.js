import styled from "styled-components";

import { simpleFlex } from "../../../../styles/mixins";

export const Container = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const NotHasBooks = styled.strong`
  margin-top: 30px;
`;
