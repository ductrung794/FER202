import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";
import { pizzaList } from "../data/pizzaList";

function PizzaList() {
  const handleBuy = (pizza) => {
    alert(`You bought: ${pizza.name}`);
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Our Delicious Pizzas</h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {pizzaList.map((pizza) => (
          <Col key={pizza.id}>
            <PizzaCard pizza={pizza} onBuy={handleBuy} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PizzaList;
