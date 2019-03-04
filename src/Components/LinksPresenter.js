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

const ItemLink = styled.a`
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
          <ItemHeader>Linked In</ItemHeader>
          <ItemLink href="https://www.linkedin.com/in/autumnsky" target="_blank">
            https://www.linkedin.com/in/autumnsky
          </ItemLink>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Github</ItemHeader>
          <ItemLink href="https://github.com/autumnsky" target="_blank">
            https://github.com/autumnsky
          </ItemLink>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Blog</ItemHeader>
          <ItemLink href="https://blog.naver.com/capu1004" target="_blank">
            https://blog.naver.com/capu1004
          </ItemLink>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Tech Note</ItemHeader>
          <ItemLink href="https://cafe.naver.com/lolmzkim" target="_blank">
            https://cafe.naver.com/lolmzkim
          </ItemLink>
        </ItemContainer>
      </StyledLi>
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Youtube</ItemHeader>
          <ItemLink href="https://cafe.naver.com/lolmzkim">https://www.youtube.com/user/capu1004</ItemLink>
        </ItemContainer>
      </StyledLi>
    </StyledUl>
  </ThemeProvider>
);
