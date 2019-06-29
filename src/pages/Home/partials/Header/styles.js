import styled from 'styled-components';

import { simpleFlex } from '../../../../styles/mixins';

import { ButtonStyles } from '../../../../components/Button/styles';

export const Container = styled.div``;

export const Form = styled.form`
  ${simpleFlex};
  justify-content: space-between;

  ${ButtonStyles} {
    margin-left: 20px;
    height: 50px;
    padding: 0 20px;
  }
`;
