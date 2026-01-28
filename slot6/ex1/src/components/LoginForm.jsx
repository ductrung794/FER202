import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // demo: không check user
    navigate("/manager-users");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "360px" }}>
        <Card.Body>
          <h4 className="text-center mb-4">Login</h4>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;
