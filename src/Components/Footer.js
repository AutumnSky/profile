import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FooterGrid = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  grid-row-gap: 30px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const MenuItem = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Links = styled.div`
  display: flex;
`;

const LinkItem = styled.a`
  font-size: 2rem;

  &:not(:last-child) {
    margin-right: 10px;
  }

  & i {
    color: white;
  }
`;

export default () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <Menu>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/career">Career</MenuItem>
          <MenuItem to="/personalproject">Personal Projects</MenuItem>
          <MenuItem to="/portfolio">Portfolios</MenuItem>
        </Menu>
        <Links>
          <LinkItem
            href="https://www.linkedin.com/in/autumnsky"
            target="_blank"
          >
            <i class="fab fa-linkedin" />
          </LinkItem>
          <LinkItem href="https://github.com/autumnsky" target="_blank">
            <i class="fab fa-github-square" />
          </LinkItem>
          <LinkItem
            href="https://www.youtube.com/user/capu1004"
            target="_blank"
          >
            <i class="fab fa-youtube-square" />
          </LinkItem>
          <LinkItem
            href="https://medium.com/autumnpage/tagged/dev"
            target="_blank"
          >
            <i class="fab fa-blogger" />
          </LinkItem>
        </Links>
      </FooterGrid>
    </FooterContainer>
  );
};
