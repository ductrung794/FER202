import React, { useState } from "react";
import { Button, Form, Card, ListGroup, InputGroup, Container } from "react-bootstrap";

function Exercise4() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") return;

    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  return (
    <Container className="my-4">
      <Card style={{ maxWidth: "600px" }} className="mx-auto bg-dark text-white">
        <Card.Body>
          <h4 className="mb-3">Todo List</h4>

          {/* INPUT + BUTTON */}
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Please input a task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button variant="danger" onClick={handleAdd}>
              Add Todo
            </Button>
          </InputGroup>

          {/* LIST */}
          <ListGroup>
            {todoList.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                {item}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(index)}
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
