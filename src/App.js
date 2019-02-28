import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Carrer from './Components/Carrer';
import Portfolio from './Components/Portfolio';
import Links from './Components/Links';
import NotFound from './Components/NotFound';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './Theme';

const Body = styled.div`
  padding-top: 140px;
  padding-left: 30px;
  padding-right: 30px;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <ThemeProvider theme={theme}>
            <Header />
          </ThemeProvider>
          <Body>
            <Switch>
              <ThemeProvider theme={theme}>
                <Route path="/" exact component={About} />
              </ThemeProvider>
              <Route path="/about" component={About} />
              <Route path="/carrer" component={Carrer} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/links" component={Links} />
              <Route component={NotFound} />
            </Switch>
          </Body>
          <GlobalStyles />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
