import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default withRouter(props => {
  const {
    location: { pathname }
  } = props;

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>
        <Link to="/">Minjeong Kim (Autumn)</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className={
              pathname === "/" || pathname.includes("about") ? "active" : ""
            }
          >
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link className={pathname.includes("career") ? "active" : ""}>
            <Link to="/career">Career</Link>
          </Nav.Link>
          <Nav.Link
            className={pathname.includes("personalproject") ? "active" : ""}
          >
            <Link to="/personalproject">Personal Projects</Link>
          </Nav.Link>
          <Nav.Link className={pathname.includes("portfolio") ? "active" : ""}>
            <Link to="/portfolio">Portfolios</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});
