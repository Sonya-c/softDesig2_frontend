import { useEffect, useState } from "react";
import { Container, Table, Form, Row, Col, Button, Card } from "react-bootstrap";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 100100100, type: 'cedula', names: 'juan', lastnames: 'perez', email: '', phone: '123' },
      { id: 200200200, type: 'cedula', names: 'pedro pablo', lastnames: 'ramirez', email: 'pr@gmail.com', phone: '' },
      { id: 300300300, type: 'cedula', names: 'maria', lastnames: 'perez', email: '', phone: '123' },
      { id: 400400400, type: 'cedula', names: 'jose', lastnames: 'ramirez', email: 'jr@mail.com', phone: '' }
    ]);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Buscar");
  }

  return (
    <Container data-testid="user-page" gap={10}>
      <Card className="mt-4 mb-2 shadow-sm">
        <Card.Body>
          <Card.Title>Buscar usuario</Card.Title>
          <Form inline action={handleSearch}>
            <Row>
              <Col sm={true} className="mt-2">
                <label for="form-id">Identificación</label>
                <Form.Control as="select" id="form-id">
                  <option></option>
                  {users.map((user) => {
                    return <option value={user.id}>{user.id}</option>
                  })
                  }
                </Form.Control>
              </Col>
              <Col sm={true} className="mt-2">
                <label for="form-id-type">Tipo</label>
                <Form.Control as="select" id="form-id-type">
                  <option></option>
                  <option>Cedula</option>
                  <option>TI</option>
                </Form.Control>
              </Col>

            </Row>
            <Row className="mt-2">
              <Col>
                <Button type="submit">Buscar</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mt-3 mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Todos los usuarios</Card.Title>
          <div style={{
            overflow: "scroll",
            maxHeight: "300px"
          }}>
            <Table striped hover borderless align="center" >
              <thead>
                <tr>
                  <th>Identificación</th>
                  <th>Nombre</th>
                  <th>Nombre(s)</th>
                  <th>Apellido(s)</th>
                  <th>Correo</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return <tr key={user.id} onClick={() => alert(user.names)}>
                    <td><div>{user.id}</div></td>
                    <td><div>{user.type}</div></td>
                    <td><div>{user.names}</div></td>
                    <td><div>{user.lastnames}</div></td>
                    <td><div>{user.email}</div></td>
                    <td><div>{user.phone}</div></td>
                  </tr>
                })}
              </tbody>
            </Table>
            <p>Mostrando {users.length} usuarios</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserPage;
