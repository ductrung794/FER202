import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Exercise3() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <Container className="my-4">
      <Card style={{ maxWidth: "500px" }} className="mx-auto">
        <Card.Body>
          <h4 className="mb-3">Exercise 3: Product Form</h4>

          <Form onSubmit={handleSubmit}>
            {/* TÊN SẢN PHẨM */}
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>

            {/* GIÁ */}
            <Form.Group className="mb-3">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
              />
            </Form.Group>

            {/* DANH MỤC */}
            <Form.Group className="mb-3">
              <Form.Label>Danh mục</Form.Label>
              <Form.Select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">-- Chọn danh mục --</option>
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary">
              Lưu sản phẩm
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Exercise3;
