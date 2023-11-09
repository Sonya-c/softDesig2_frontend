import { useEffect, useState } from "react";
import { Container, Table, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

function UserPage() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      setUsers([
        {id: 1, type: 'cedula', names: 'juan', lastnames: 'perez', email: '', phone: '123'},
        {id: 2, type: 'cedula', names: 'pedro pablo', lastnames: 'ramirez', email: 'pr@gmail.com', phone: ''},
        {id: 3, type: 'cedula', names: 'maria', lastnames: 'perez', email: '', phone: '123'},
        {id: 4, type: 'cedula', names: 'jose', lastnames: 'ramirez', email: 'jr@mail.com', phone: ''}
      ]);
    }, []);
    
    return (
      <Container data-testid="user-page">
        <h1>Usuarios</h1>
        <section>
          <h2>Buscar usuario</h2>
          
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Indetificación"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Tipo de identificación"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </section>
        <section>
          <h2>Todos los usuarios</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Nombre(s)</th>
                <th>Apellido(s)</th>
                <th>Correo electrónico</th>
                <th>Telefono</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <tr>
                  <td>{user.id}</td>
                  <td>{user.type}</td>
                  <td>{user.names}</td>
                  <td>{user.lastnames}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              })}
            </tbody>
          </Table>
        </section>
      </Container>
    );
  }
  
  export default UserPage;
  