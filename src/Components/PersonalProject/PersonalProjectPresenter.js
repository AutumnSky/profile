import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import ProjectList from '../ProjectList';
import propTypes from 'prop-types';

const PersonalProjectPresenter = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProjectList data={data} dataType="personal" />
    </ThemeProvider>
  );
};

PersonalProjectPresenter.propTypes = {
  data: propTypes.array.isRequired
};

export default PersonalProjectPresenter;
