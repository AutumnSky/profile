import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme';
import styled from 'styled-components';

const StyledUl = styled.ul`
  &:not(:last-child) {
    margin-bottom: 100px;
  }
`;

const StyledLi = styled.li`
  margin-bottom: 50px;
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
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  display: block;
  color: ${(props) => props.theme.mainDark};
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ItemContent = styled.span`
  color: ${(props) => props.theme.fontDesc};
  font-size: 16px;
  font-weight: 500;
  margin-left: 80px;
  margin-bottom: 20px;
`;

const ItemLink = styled.a`
  color: ${(props) => props.theme.fontDesc};
  font-size: 16px;
  font-weight: 500;
  margin-left: 80px;
  margin-bottom: 20px;
`;

export default () => (
  <ThemeProvider theme={theme}>
    <StyledUl>
      <StyledLi>
        {/* I'm */}
        <ItemContainer>
          <ItemHeader>I'm...</ItemHeader>
          <Item>
            <ItemTitle>Name</ItemTitle>
            <ItemContent>Minjeong Kim</ItemContent>
          </Item>
          <Item>
            <ItemTitle>Nickname</ItemTitle>
            <ItemContent>autumn</ItemContent>
          </Item>
          <Item>
            <ItemTitle>Doing...</ItemTitle>
            <ItemContent>iOS, Android, Unity(2D), Node.js, React</ItemContent>
          </Item>
          <Item>
            <ItemTitle>Contact</ItemTitle>
            <ItemContent>doingnone@gmail.com</ItemContent>
          </Item>
        </ItemContainer>
      </StyledLi>
      {/* Education */}
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Education</ItemHeader>
          <ItemTitle>The Catholic University of Korea</ItemTitle>
          <ItemContent>February 2007 - August 2011</ItemContent>
          <ItemContent>Bachelor of Computer Science</ItemContent>
        </ItemContainer>
      </StyledLi>

      {/* Links */}
      <StyledLi>
        <ItemContainer>
          <ItemHeader>Links</ItemHeader>
          <Item>
            <ItemTitle>Linked In</ItemTitle>
            <ItemLink href="https://www.linkedin.com/in/autumnsky" target="_blank">
              https://www.linkedin.com/in/autumnsky
            </ItemLink>
          </Item>
          <Item>
            <ItemTitle>Github</ItemTitle>
            <ItemLink href="https://github.com/autumnsky" target="_blank">
              https://github.com/autumnsky
            </ItemLink>
          </Item>
          <Item>
            <ItemTitle>Blog</ItemTitle>
            <ItemLink href="https://blog.naver.com/capu1004" target="_blank">
              https://blog.naver.com/capu1004
            </ItemLink>
          </Item>
          <Item>
            <ItemTitle>Tech Note</ItemTitle>
            <ItemLink href="https://cafe.naver.com/lolmzkim" target="_blank">
              https://cafe.naver.com/lolmzkim
            </ItemLink>
          </Item>
          <Item>
            <ItemTitle>Youtube</ItemTitle>
            <ItemLink href="https://cafe.naver.com/lolmzkim">https://www.youtube.com/user/capu1004</ItemLink>
          </Item>
        </ItemContainer>
      </StyledLi>
    </StyledUl>
  </ThemeProvider>
);
