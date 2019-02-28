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
          <ItemHeader>The Catholic University of Korea</ItemHeader>
          <ItemYear>February 2007 - August 2011</ItemYear>
          <ItemRole>Bachelor of Computer Science</ItemRole>
        </ItemContainer>
      </StyledLi>
    </StyledUl>
  </ThemeProvider>
);
