import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import styled from 'styled-components';

const StyledUl = styled.ul``;

const StyledLi = styled.li`margin-bottom: 40px;`;

const ItemContainer = styled.div``;

const ItemHeader = styled.div`
  color: ${(props) => props.theme.main};
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ItemContent = styled.div`
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
          <ItemHeader>Name</ItemHeader>
          <ItemContent>Minjeong Kim</ItemContent>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Nickname</ItemHeader>
          <ItemContent>autumn</ItemContent>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>What I'm doing...</ItemHeader>
          <ItemContent>iOS, Android, Unity(2D), Node.js, React</ItemContent>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Contact</ItemHeader>
          <ItemContent>doingnone@gmail.com</ItemContent>
        </ItemContainer>
      </StyledLi>
    </StyledUl>
  </ThemeProvider>
);
