import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Student from "./Student";
import studentData from "../data/studentData";

function StudentList() {
  return (
    <Row className="g-4">
      {studentData.map((student) => (
        <Col key={student.id} xs={12} sm={6} md={4}>
          <Student student={student} />
        </Col>
      ))}
    </Row>
  );
}

export default StudentList;
