import Card from 'react-bootstrap/Card';

const About = ({ name, age, major }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Age:</strong> {age} <br />
          <strong>Major:</strong> {major}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
