import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          User System
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Button as={Link} to="/login" variant="outline-light">
            Login
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
