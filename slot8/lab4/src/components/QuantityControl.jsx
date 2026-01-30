import React, { useReducer } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function QuantityControl() {
  function reducer(state, action) {
    switch (action.type) {
      case "DECREASE":
        return Math.max(0, state - 1);
      case "INCREASE":
        return state + 1;
      case "SET": {
        const value = Number(action.value);
        return value >= 0 ? value : 0;
      }
      default:
        return state;
    }
  }

  const [quantity, dispatch] = useReducer(reducer, 0);

  return (
    <InputGroup style={{ maxWidth: "200px" }}>
      <Button variant="secondary" onClick={() => dispatch({ type: "DECREASE" })}>
        -
      </Button>

      <Form.Control
        type="number"
        value={quantity}
        onChange={(e) => dispatch({ type: "SET", value: e.target.value })}
        min={0}
        className="text-center"
      />

      <Button variant="secondary" onClick={() => dispatch({ type: "INCREASE" })}>
        +
      </Button>
    </InputGroup>
  );
}

export default QuantityControl;
