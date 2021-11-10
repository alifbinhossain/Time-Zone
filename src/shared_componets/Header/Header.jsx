import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "#cb9400",
    fontWeight: "700",
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/explore">
                Explore
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
