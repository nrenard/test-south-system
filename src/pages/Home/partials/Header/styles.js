import styled from 'styled-components';

import { simpleFlex } from '../../../../styles/mixins';

import { ButtonStyles } from '../../../../components/Button/styles';
import { Container as ContainerLoader, Loader } from '../../../../components/Loader/styles';

export const Container = styled.div``;

export const Form = styled.form`
  ${simpleFlex};
  justify-content: space-between;

  ${ButtonStyles} {
    justify-content: center;
    margin-left: 20px;
    height: 50px;
    padding: 0 20px;
    width: 90px;
  }

  ${ContainerLoader} {
    margin: 0;

    ${Loader} {
      width: 30px;
      height: 30px;
      border-top-color: #fff;
    }
  }
`;
