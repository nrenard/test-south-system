import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const callToAction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
};

const limitTop = 1000;

const BackToTop = () => {
  const [show, changeShow] = useState(false);

  const handleScroll = () => {
    const passedLimit = document.body.scrollTop > limitTop || document.documentElement.scrollTop > limitTop;

    if (passedLimit && !show) {
      changeShow(true);
    } else if (!passedLimit && show) {
      changeShow(false);
    }
  };

  useEffect(() => {
    window.onscroll = handleScroll;
  });

  return (
    show && (
      <Container onClick={callToAction}>
        <p>TOPO</p>
      </Container>
    )
  );
};

export default BackToTop;
