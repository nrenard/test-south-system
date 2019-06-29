import React from 'react';

import { Container, List, Item } from './styles';

const Pagination = ({ pages, active }) => (
  <Container>
    <List>
      <Item>prev</Item>
      <Item>1</Item>
      <Item>2</Item>
      <Item>next</Item>
    </List>
  </Container>
);

export default Pagination;
