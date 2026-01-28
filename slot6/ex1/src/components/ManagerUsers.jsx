import React from "react";
import { Table, Button, Image, Container } from "react-bootstrap";
import listOfUser from "../data/ListOfUser";

function ManagerUsers() {
  return (
    <Container className="my-5">
      <h3 className="mb-4 text-center">User Management</h3>

      <Table bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {listOfUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>
                <Image
                  src={user.avatar}
                  roundedCircle
                  width={40}
                  height={40}
                />
              </td>

              <td>{user.username}</td>
              <td>{user.password}</td>

              <td>
                <Button variant="warning" size="sm" className="me-2">
                  Edit
                </Button>

                <Button
                  variant={user.locked ? "secondary" : "danger"}
                  size="sm"
                >
                  {user.locked ? "Locked" : "Lock"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ManagerUsers;
