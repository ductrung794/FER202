import Container from "react-bootstrap/Container";
import StudentList from "./components/StudentList";

function App() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Student List</h2>
      <StudentList />
    </Container>
  );
}

export default App;
