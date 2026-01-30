import React, { useState, useReducer } from "react";
import { Button, Form, Card, ListGroup, InputGroup, Container } from "react-bootstrap";

function Exercise4() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TASK": {
        const text = (action.text || "").trim();
        if (!text) return state;
        const id = Date.now() + Math.random().toString(36).slice(2, 9);
        return [...state, { id, text }];
      }
      case "DELETE_TASK":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  }

  const [todoList, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    if (todo.trim() === "") {
      setTodoError("Vui lòng nhập công việc.");
      return;
    }

    dispatch({ type: "ADD_TASK", text: todo });
    setTodo("");
    setTodoError("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", id });
  };

  return (
    <Container className="my-4">
      <Card style={{ maxWidth: "600px" }} className="mx-auto bg-dark text-white">
        <Card.Body>
          <h4 className="mb-3">Todo List</h4>
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Please input a task"
              value={todo}
              onChange={(e) => { setTodo(e.target.value); setTodoError(""); }}
              isInvalid={!!todoError}
            />
            <Form.Control.Feedback type="invalid">{todoError}</Form.Control.Feedback>
            <Button variant="danger" onClick={handleAdd}>
              Add Todo
            </Button>
          </InputGroup>
          <ListGroup>
            {todoList.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.text}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Exercise4;
