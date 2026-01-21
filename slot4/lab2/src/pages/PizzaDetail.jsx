import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { pizzaList } from "../data/pizzaList";

function PizzaDetail() {
  const { id } = useParams();
  const pizza = pizzaList.find((p) => p.id === Number(id));
  if (!pizza) {
    return (
      <Container className="my-5">
        <h3>Pizza not found</h3>
      </Container>
    );
  }
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={pizza.image}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>{pizza.name}</h2>
          {pizza.tags && (
            <div className="mb-2">
              {pizza.tags.map((tag, index) => (
                <Badge bg="warning" text="dark" className="me-1" key={index}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <p className="mt-3">{pizza.description}</p>
          <h4>
            ${pizza.price.toFixed(2)}{" "}
            {pizza.oldPrice && (
              <small className="text-muted text-decoration-line-through ms-2">
                ${pizza.oldPrice.toFixed(2)}
              </small>
            )}
          </h4>
          <Button variant="danger" className="mt-3">
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PizzaDetail;
