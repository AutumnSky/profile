import React from 'react';
import AboutPresenter from './AboutPresenter';
import * as api from 'api';

class AboutContainer extends React.Component {
  async componentDidMount() {
    // prevent lambda cold start timeout
    await api.helloWorld();
  }

  render() {
    return <AboutPresenter />;
  }
}

export default AboutContainer;
