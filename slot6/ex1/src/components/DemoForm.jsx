import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Alert,
  Container,
  Card,
} from "react-bootstrap";

function DemoForm() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "420px" }} className="shadow">
        <Card.Body>
          <Alert variant="warning" dismissible>
            Đây là form demo đặt vé
          </Alert>

          <h4 className="mb-3">Form đặt vé máy bay</h4>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Họ tên</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-person"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Họ tên" />
                <InputGroup.Text>vnd</InputGroup.Text>
              </InputGroup>
              <Form.Text className="text-muted">
                Phải nhập 5 ký tự, in hoa...
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                Phải nhập 5 ký tự, in hoa...
              </Form.Text>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Đi từ</Form.Label>
                  <Form.Select>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>TP HCM</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>Đến</Form.Label>
                  <Form.Select>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>TP HCM</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
              <Form.Check type="checkbox" label="Đi" />
              <Form.Check type="checkbox" label="Về" />
            </Form.Group>

            <Button variant="primary" className="w-100">
              Đặt vé
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DemoForm;
