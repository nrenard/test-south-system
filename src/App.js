import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles, { Container } from './styles/global';
import theme from './styles/theme';

import Header from './components/Header';
import Routes from './routes';

import store from './store';

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <>
          <Header />
          <Container>
            <Routes />
          </Container>
        </>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
