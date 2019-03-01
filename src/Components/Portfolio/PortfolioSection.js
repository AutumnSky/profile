import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

const Container = styled.div`margin-bottom: 50px;`;

const Year = styled.h3`
  color: ${(props) => props.theme.mainDark};
  font-size: 25px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 14px;
  justify-content: center;
`;

const PortfolioSection = ({ year, portfolioList }) => (
  <Container>
    <Year>{year}</Year>
    <Grid>{portfolioList.map((portfolio) => <PortfolioItem key={portfolio._id} data={portfolio} />)}</Grid>
  </Container>
);

PortfolioSection.propTypes = {
  year: propTypes.number.isRequired,
  portfolioList: propTypes.array.isRequired
};

export default PortfolioSection;
