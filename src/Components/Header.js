import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../Theme';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NameContainer = styled.div`
  background-color: ${(props) => props.theme.mainDark};
  padding: 20px 30px;
`;

const Name = styled.span`
  display: inline-block;
  font-size: 26px;
  color: ${(props) => props.theme.font};
  margin-right: 10px;
`;

const NickName = styled.span`
  display: inline-block;
  font-size: 18px;
  color: ${(props) => props.theme.fontLight};
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  padding: 0px 30px;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fontLight};
  text-decoration: none;
  height: 50px;
  width: 80px;
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }

  border-bottom: 5px solid ${(props) => (props.isCurrentPage === true ? 'rgba(255, 255, 255, 0.7)' : 'transparent')};
`;

// const MenuLine = styled.div`
//   width: 80px;
//   height: 5px;
//   background-color: ${(props) => props.theme.fontLight};
//   opacity: 0.8;
//   position: absolute;
//   left: 0;
//   bottom: 0;
// `;

export default withRouter((props) => {
  const { location: { pathname } } = props;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NameContainer>
          <Link to="/">
            <Name>Minjeong Kim</Name>
            <NickName>(autumn)</NickName>
          </Link>
        </NameContainer>
        <MenuContainer>
          <MenuLink to="/portfolio" isCurrentPage={pathname === '/' || pathname.includes('portfolio')}>
            Portfolio
          </MenuLink>
          <MenuLink to="/career" isCurrentPage={pathname.includes('career')}>
            Career
          </MenuLink>
          <MenuLink to="/about" isCurrentPage={pathname.includes('about')}>
            About
          </MenuLink>
          <MenuLink to="/links" isCurrentPage={pathname.includes('links')}>
            Links
          </MenuLink>
        </MenuContainer>
      </Container>
    </ThemeProvider>
  );
});
