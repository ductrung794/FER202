import React from "react";
import { Card, Button, Badge, ButtonGroup } from "react-bootstrap";

function PizzaCard({ pizza, onViewDetail, onBuy }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={pizza.image}
        alt={pizza.name}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{pizza.name}</Card.Title>

        {pizza.tags && (
          <div className="mb-2">
            {pizza.tags.map((tag, index) => (
              <Badge bg="warning" text="dark" className="me-1" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text>{pizza.description}</Card.Text>

        <div className="mt-auto">
          <h5 className="mb-3">
            ${pizza.price.toFixed(2)}{" "}
            {pizza.oldPrice && (
              <small className="text-muted text-decoration-line-through ms-2">
                ${pizza.oldPrice.toFixed(2)}
              </small>
            )}
          </h5>

          {/* ✅ BOOTSTRAP BUTTON GROUP */}
          <ButtonGroup className="w-100">
            {/* View Detail – màu phụ */}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => onViewDetail(pizza)}
            >
              View Detail
            </Button>

            {/* Buy – màu chính */}
            <Button
              variant="danger"
              size="sm"
              onClick={() => onBuy(pizza)}
            >
              Buy
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
