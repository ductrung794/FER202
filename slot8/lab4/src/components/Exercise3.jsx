import React, { useReducer, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Exercise3() {
  const initialForm = { name: "", price: "", category: "" };

  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_INPUT":
        return { ...state, [action.field]: action.value };
      case "RESET_FORM":
        return initialForm;
      default:
        return state;
    }
  }

  const [form, dispatch] = useReducer(reducer, initialForm);

  const [errors, setErrors] = useState({ name: "", price: "", category: "" });

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", field: name, value });
    // Clear the specific field error and any message while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = { name: "", price: "", category: "" };
    if (!form.name.trim()) nextErrors.name = "Tên sản phẩm bắt buộc.";

    const priceNum = Number(form.price);
    if (form.price === "" || Number.isNaN(priceNum)) nextErrors.price = "Giá phải là số.";
    else if (priceNum < 0) nextErrors.price = "Giá phải lớn hơn hoặc bằng 0.";

    if (!form.category) nextErrors.category = "Danh mục bắt buộc.";

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setErrors(nextErrors);
      setMessage({ type: "error", text: "Có lỗi trong form. Vui lòng kiểm tra." });
      return;
    }

    // success
    setErrors({ name: "", price: "", category: "" });
    setMessage({ type: "success", text: "Lưu sản phẩm thành công!" });
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <Container className="my-4">
      <Card style={{ maxWidth: "500px" }} className="mx-auto">
        <Card.Body>
          <h4 className="mb-3">Exercise 3: Product Form</h4>

          {message.text && (
            <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mt-2`} role="alert">
              {message.text}
            </div>
          )}

          <Form onSubmit={handleSubmit}>
            {/* TÊN SẢN PHẨM */}
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            {/* GIÁ */}
            <Form.Group className="mb-3">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
            </Form.Group>

            {/* DANH MỤC */}
            <Form.Group className="mb-3">
              <Form.Label>Danh mục</Form.Label>
              <Form.Select
                name="category"
                value={form.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              >
                <option value="">-- Chọn danh mục --</option>
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex gap-2">
              <Button type="submit" variant="primary">
                Lưu sản phẩm
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  dispatch({ type: "RESET_FORM" });
                  setErrors({ name: "", price: "", category: "" });
                  setMessage({ type: "", text: "" });
                }}
              >
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>


    </Container>
  );
}

export default Exercise3;


