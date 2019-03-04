import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'Theme';

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
`;

export default () => (
  <ThemeProvider theme={theme}>
    <StyledUl>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Freelancer</ItemHeader>
          <ItemYear>July 2016 - Present</ItemYear>
          <ItemRole>Learning FullStack, iOS, Android, Unity 2D</ItemRole>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Layer Lab</ItemHeader>
          <ItemYear>December 2013 - July 2016</ItemYear>
          <ItemRole>iOS, Android, Unity 2D</ItemRole>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Motion Blue</ItemHeader>
          <ItemYear>May 2011 - May 2013</ItemYear>
          <ItemRole>iOS, Android</ItemRole>
        </ItemContainer>
      </StyledLi>
    </StyledUl>
  </ThemeProvider>
);
