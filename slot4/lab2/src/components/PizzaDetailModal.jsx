import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";

function PizzaDetailModal({ show, onHide, pizza }) {
  if (!pizza) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={pizza.image}
          alt={pizza.name}
          className="img-fluid mb-3"
          style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
        />

        {pizza.tags && (
          <div className="mb-2">
            {pizza.tags.map((tag, index) => (
              <Badge bg="warning" text="dark" className="me-1" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <p>{pizza.description}</p>

        <h5>
          Price: ${pizza.price.toFixed(2)}{" "}
          {pizza.oldPrice && (
            <small className="text-muted text-decoration-line-through ms-2">
              ${pizza.oldPrice.toFixed(2)}
            </small>
          )}
        </h5>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Order Now</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PizzaDetailModal;
