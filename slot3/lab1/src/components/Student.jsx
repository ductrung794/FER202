import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Student({ student }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={student.name}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{student.name}</Card.Title>

        <Card.Text>
          Age: {student.age} <br />
          Major: {student.major}
        </Card.Text>

        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Student;
