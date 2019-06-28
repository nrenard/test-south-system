import React from "react";

import { Container, Image, Title, Description } from "./styles";

const BookItem = ({ book }) => {
  const { title, smallThumbnail, description } = book;

  return (
    <Container>
      <Image src={smallThumbnail} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default BookItem;
