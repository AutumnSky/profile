import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import ProjectList from '../ProjectList';
import propTypes from 'prop-types';

const PortfolioPresenter = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProjectList data={data} />
    </ThemeProvider>
  );
};

PortfolioPresenter.propTypes = {
  data: propTypes.array.isRequired
};

export default PortfolioPresenter;
