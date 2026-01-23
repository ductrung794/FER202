import React from "react";
import { Card, Button, Badge, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function PizzaCard({ pizza, onBuy }) {
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
            ${pizza.price.toFixed(2)}
          </h5>

          <ButtonGroup className="w-100">
            {/* VIEW DETAIL → PAGE */}
            <Button
              as={Link}
              to={`/pizza/${pizza.id}`}
              variant="outline-primary"
              size="sm"
            >
              View Detail
            </Button>

            {/* BUY */}
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
