import styled from "styled-components";

import { container, simpleFlex } from "../../styles/mixins";

export const HeaderStyles = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Container = styled.div`
  ${container};
  ${simpleFlex};
  justify-content: space-between;
  padding: 20px 0;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 60px;

  @media (min-width: 768px) {
    max-width: 100px;
  }
`;

export const Nav = styled.nav`
  a {
    color: ${({ theme }) => theme.secondaryColor};
    text-transform: uppercase;
    font-weight: 600;
    transition: color 0.1s ease-in;
    font-size: 14px;

    &:hover {
      color: #fff;
    }

    &.active {
      color: #fff;
    }

    + a {
      margin-left: 20px;
    }

    @media (min-width: 768px) {
    }
  }
`;
