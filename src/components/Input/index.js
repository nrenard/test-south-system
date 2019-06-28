import React from "react";

import { Container, InputStyle } from "./styles";

const Input = ({ name, type = "text", placeholder = "", ...props }) => (
  <Container>
    <InputStyle type={type} placeholder={placeholder} name={name} {...props} />
  </Container>
);

export default Input;
