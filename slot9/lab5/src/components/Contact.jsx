import React, { useReducer, useState } from "react";
import { Form, Button, Row, Col, Modal, Toast, ToastContainer } from "react-bootstrap";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  city: "",
  state: "",
  zip: "",
  agreed: false,
  errors: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };

    case "SET_ALL_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [registeredData, setRegisteredData] = useState(null);

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;

      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;

      case "username":
        if (!value.trim()) error = "Username is required";
        break;

      case "city":
        if (!value.trim()) error = "City is required";
        break;

      case "state":
        if (!value.trim()) error = "State is required";
        break;

      case "zip":
        if (!value.trim()) error = "Zip is required";
        else if (!/^[0-9]+$/.test(value))
          error = "Zip must be numeric";
        break;

      case "agreed":
        if (!value) error = "You must agree before submitting";
        break;

      default:
        break;
    }

    dispatch({ type: "SET_ERROR", field, error });
    return error;
  };

  const validateAll = () => {
    const errors = {};

    Object.keys(state).forEach((field) => {
      if (field !== "errors") {
        const error = validateField(field, state[field]);
        if (error) errors[field] = error;
      }
    });

    dispatch({ type: "SET_ALL_ERRORS", errors });

    return Object.keys(errors).length === 0;
  };

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
    validateField(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateAll()) {
      setRegisteredData(state);
      setShowModal(true);
      setShowToast(true);
      dispatch({ type: "RESET" });
    }
  };

  return (
    <div className="container mt-4">
      <h3>Contact Form</h3>

      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>First name</Form.Label>
            <Form.Control
              value={state.firstName}
              isInvalid={!!state.errors.firstName}
              onChange={(e) =>
                handleChange("firstName", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.firstName}
            </Form.Control.Feedback>
          </Col>

          <Col md={4}>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              value={state.lastName}
              isInvalid={!!state.errors.lastName}
              onChange={(e) =>
                handleChange("lastName", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.lastName}
            </Form.Control.Feedback>
          </Col>

          <Col md={4}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={state.username}
              isInvalid={!!state.errors.username}
              onChange={(e) =>
                handleChange("username", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.username}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>City</Form.Label>
            <Form.Control
              value={state.city}
              isInvalid={!!state.errors.city}
              onChange={(e) =>
                handleChange("city", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.city}
            </Form.Control.Feedback>
          </Col>

          <Col md={4}>
            <Form.Label>State</Form.Label>
            <Form.Control
              value={state.state}
              isInvalid={!!state.errors.state}
              onChange={(e) =>
                handleChange("state", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.state}
            </Form.Control.Feedback>
          </Col>

          <Col md={4}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={state.zip}
              isInvalid={!!state.errors.zip}
              onChange={(e) =>
                handleChange("zip", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.zip}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Form.Check
          type="checkbox"
          label="Agree to terms and conditions"
          checked={state.agreed}
          isInvalid={!!state.errors.agreed}
          onChange={(e) =>
            handleChange("agreed", e.target.checked)
          }
        />
        {state.errors.agreed && (
          <div className="text-danger">{state.errors.agreed}</div>
        )}

        <Button className="mt-3" type="submit">
          Submit form
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {registeredData && (
            <>
              <p><b>First Name:</b> {registeredData.firstName}</p>
              <p><b>Last Name:</b> {registeredData.lastName}</p>
              <p><b>Username:</b> {registeredData.username}</p>
              <p><b>City:</b> {registeredData.city}</p>
              <p><b>State:</b> {registeredData.state}</p>
              <p><b>Zip:</b> {registeredData.zip}</p>
            </>
          )}
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">
            Đã đăng ký thành công!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Contact;
