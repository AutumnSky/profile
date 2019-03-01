import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'Theme';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`width: 300px;`;
const Content = styled.h3`
  color: ${(props) => props.theme.fontWarning};
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Img src={require('assets/pageNotFound.png')} />
      <Content>Ooops...</Content>
      <Content>You entered wrong page</Content>
    </Container>
  </ThemeProvider>
);
