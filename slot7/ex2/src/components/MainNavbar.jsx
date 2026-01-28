import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>React Exercises</Navbar.Brand>

        <Nav className="me-auto">
          
          <Nav.Link as={NavLink} to="/ex1">
            Exercise 1
          </Nav.Link>

          <Nav.Link as={NavLink} to="/ex2">
            Exercise 2
          </Nav.Link>

          <Nav.Link as={NavLink} to="/ex3">
            Exercise 3
          </Nav.Link>
          
          <Nav.Link as={NavLink} to="/ex4">
            Exercise 4
          </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
