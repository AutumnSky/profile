import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Career from './Components/Career';
import Portfolio from './Components/Portfolio';
import NotFound from './Components/NotFound';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

const Body = styled.div`
  padding-top: 140px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Body>
            <Switch>
              <Route path="/" exact component={Portfolio} />
              <Route path="/career" component={Career} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Body>
          <GlobalStyles />
        </Fragment>
      </Router>
    );
  }
}

export default App;
