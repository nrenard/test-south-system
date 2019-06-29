import React from 'react';

import { Container, List, Item } from './styles';

const renderPages = ({ pages, page, changePage }) => {
  const items = [];

  for (let i = 1; i < pages + 1; i += 1) {
    items.push(i);
  }

  return items.map(pageIndex => (
    <Item key={pageIndex} active={page + 1 === pageIndex} onClick={() => changePage(pageIndex - 1)}>
      {pageIndex}
    </Item>
  ));
};

const SimplePagination = props => (
  <Container>
    <List>{renderPages(props)}</List>
  </Container>
);

export default SimplePagination;
