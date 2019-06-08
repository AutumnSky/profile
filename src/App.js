import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import PersonalProject from "./Components/PersonalProject";
import Career from "./Components/Career";
import Portfolio from "./Components/Portfolio";
import NotFound from "./Components/NotFound";
import ProjectDetail from "./Components/ProjectDetail";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecf0f1;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Body>
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/career" component={Career} />
              <Route path="/personalproject" component={PersonalProject} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route path="/detail/:type/:id" component={ProjectDetail} />
              <Route component={NotFound} />
            </Switch>
          </Body>
          <Footer />
          <GlobalStyles />
        </Fragment>
      </Router>
    );
  }
}

export default App;
