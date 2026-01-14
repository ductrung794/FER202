import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import listOfStudent from "../data/listOfStudent";
import About from "./About";

const StudentList = () => {
  return (
    <Row className="g-4">
      {listOfStudent.map((student) => (
        <Col key={student.id} xs={12} sm={6} md={4} lg={3}>
          <About
            name={student.name}
            age={student.age}
            major={student.major}
          />
        </Col>
      ))}
    </Row>
  );
};

export default StudentList;
