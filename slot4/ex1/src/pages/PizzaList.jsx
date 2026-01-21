import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import PizzaCard from "../components/PizzaCard";
import PizzaDetailModal from "../components/PizzaDetailModal";
import { pizzaList } from "../data/pizzaList";

function PizzaList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleViewDetail = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPizza(null);
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Our Delicious Pizzas</h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {pizzaList.map((pizza) => (
          <Col key={pizza.id}>
            <PizzaCard
              pizza={pizza}
              onViewDetail={handleViewDetail}
            />
          </Col>
        ))}
      </Row>

      {/* ✅ MODAL */}
      <PizzaDetailModal
        show={showModal}
        onHide={handleClose}
        pizza={selectedPizza}
      />
    </Container>
  );
}

export default PizzaList;
