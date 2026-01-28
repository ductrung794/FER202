import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function TestUseState() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [label, setLabel] = useState("My name is , ");

  const handleSubmit = () => {
    setLabel(`My name is ${username}, ${age}`);
  };

  return (
    <div>
      <h2>Test useState Hook</h2>
      <Container>
        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="username" className="form-label">
              Username:
            </label>
          </Col>
          <Col md={4}>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}>
            <label htmlFor="age" className="form-label">
              Age:
            </label>
          </Col>
          <Col md={4}>
            <input
              type="number"
              id="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Button variant="primary" onClick={handleSubmit}>
              Change
            </Button>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <label className="form-label">{label}</label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestUseState;
