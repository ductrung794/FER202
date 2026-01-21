import React from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="mx-auto d-flex align-items-center justify-content-between"
          style={{ maxWidth: "1200px" }}
        >
          <div className="d-flex align-items-center gap-4">
            <Navbar.Brand as={Link} to="/">
              Pizza House
            </Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </div>
          <InputGroup style={{ maxWidth: "400px" }}>
            <FormControl type="search" placeholder="Search" />
            <Button variant="danger">🔍</Button>
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
