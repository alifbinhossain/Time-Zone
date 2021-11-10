import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAll from "../../hooks/useAll";

const Header = () => {
  const { user, logOut } = useAll();

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

              {user ? (
                <>
                  <Nav.Link> {user?.displayName} </Nav.Link>
                  <Button onClick={logOut} variant="dark">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Nav.Link
                  as={NavLink}
                  activeStyle={activeStyle}
                  to="/form/signin"
                >
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
