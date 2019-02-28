import React, { Fragment } from 'react';
import CareerCompany from './CareerCompany';
import CareerEducation from './CareerEducation';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'Theme';

const Title = styled.h3`
  font-size: 25px;
  color: ${(props) => props.theme.mainDark};
  font-weight: 600;
`;

const Item = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Title>Work History</Title>
      <Item>
        <CareerCompany />
      </Item>
      <Title>Education</Title>
      <Item>
        <CareerEducation />
      </Item>
    </Fragment>
  </ThemeProvider>
);
