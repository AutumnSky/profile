import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import propTypes from 'prop-types';
import ProjectList from '../ProjectList';

const StyledUl = styled.ul``;

const StyledLi = styled.li`
  margin-bottom: 40px;
  list-style-type: disc;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemHeader = styled.span`
  color: ${(props) => props.theme.main};
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ItemYear = styled.span`
  color: ${(props) => props.theme.fontDesc};
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ItemRole = styled.p`
  color: ${(props) => props.theme.fontDesc};
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const CareerPresenter = ({ data }) => {
  const result = data.reduce((totalData, currentData) => {
    const key = currentData['company'];
    if (!totalData[key]) {
      totalData[key] = [];
    }
    totalData[key].push(currentData);
    return totalData;
  }, {});

  return (
    <ThemeProvider theme={theme}>
      <StyledUl>
        <StyledLi>
          <ItemContainer>
            <ItemHeader>Freelancer</ItemHeader>
            <ItemYear>July 2016 - Present</ItemYear>
            <ItemRole>Learning FullStack, iOS, Android, Unity 2D</ItemRole>
            <ProjectList data={result['freelancer']} />
          </ItemContainer>
        </StyledLi>
        <StyledLi>
          <ItemContainer>
            <ItemHeader>Layer Lab</ItemHeader>
            <ItemYear>December 2013 - July 2016</ItemYear>
            <ItemRole>iOS, Android, Unity 2D</ItemRole>
            <ProjectList data={result['layerlab']} />
          </ItemContainer>
        </StyledLi>
        <StyledLi>
          <ItemContainer>
            <ItemHeader>Motion Blue</ItemHeader>
            <ItemYear>May 2011 - May 2013</ItemYear>
            <ItemRole>iOS, Android</ItemRole>
            <ProjectList data={result['motionblue']} />
          </ItemContainer>
        </StyledLi>
      </StyledUl>
    </ThemeProvider>
  );
};

CareerPresenter.propTypes = {
  data: propTypes.array.isRequired
};

export default CareerPresenter;
