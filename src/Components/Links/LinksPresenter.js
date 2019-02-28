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
          <ItemHeader>Github</ItemHeader>
          <ItemContent>https://github.com/autumnsky</ItemContent>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Blog</ItemHeader>
          <ItemContent>https://blog.naver.com/capu1004</ItemContent>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Tech Note</ItemHeader>
          <ItemContent>https://cafe.naver.com/lolmzkim</ItemContent>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Youtube</ItemHeader>
          <ItemContent>https://www.youtube.com/user/capu1004</ItemContent>
        </ItemContainer>
      </StyledLi>
    </StyledUl>
  </ThemeProvider>
);
