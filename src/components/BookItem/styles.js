import styled from "styled-components";

import { simpleFlex } from "../../styles/mixins";

export const Container = styled.div`
  ${simpleFlex};
  flex-direction: column;
  margin-top: 40px;
  max-width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 33%;
    padding-right: 20px;
    margin-top: 60px;
  }
`;

export const Image = styled.img`
  width: 130px;
  height: 186px;
`;

export const Title = styled.strong`
  ${simpleFlex};
  margin: 20px 0 10px;
  height: 40px;
`;

export const Description = styled.p`
  width: 100%;
  height: 55px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
