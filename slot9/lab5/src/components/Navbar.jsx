import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>React Exercises</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/news">
            News
          </Nav.Link>
          <Nav.Link as={NavLink} to="/quiz">
            Quiz
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
