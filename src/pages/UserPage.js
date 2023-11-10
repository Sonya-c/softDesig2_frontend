import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
import TableComponent from "../components/TableComponent";

function UserPage() {
  const columns = ["Identificación", "Tipo", "Nombres", "Apellidos", "Correo", "Teléfono"];
  const userProperties = ["id", "type", "names", "lastnames", "email", "phone"];
  
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = (userData) => {
    console.log(userData);
    setUser(userData);
    setShowModal(false);
  }
  
  const handleShowModal = (userData) => {
    console.log(userData);
    setUser(userData);
    setShowModal(true);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    alert("Buscar");
  }

  useEffect(() => {
    setUsers([
      { id: 100100100, type: 'cedula', names: 'juan', lastnames: 'perez', email: '', phone: '123' },
      { id: 200200200, type: 'cedula', names: 'pedro pablo', lastnames: 'ramirez', email: 'pr@gmail.com', phone: '' },
      { id: 300300300, type: 'cedula', names: 'maria', lastnames: 'perez', email: '', phone: '123' },
      { id: 400400400, type: 'cedula', names: 'jose', lastnames: 'ramirez', email: 'jr@mail.com', phone: '' }
    ]);
  }, []);

  return (
    <Container data-testid="user-page" gap={10}>
      
      <Card className="mt-4 mb-2 shadow-sm">
        <Card.Body>
          <Card.Title>Buscar usuario</Card.Title>
          <Form inline action={handleSearch}>
            <Row>
              <Col sm={true} className="mt-2">
                <label for="form-id">Identificación</label>
                <Form.Control as="select" id="search-form-id">
                  <option></option>
                  {users.map((user) => {
                    return <option value={user.id}>{user.id}</option>
                  })}
                </Form.Control>
              </Col>
              <Col sm={true} className="mt-2">
                <label for="form-id-type">Tipo</label>
                <Form.Control as="select" id="search-form-id">
                  <option></option>
                  <option>Cedula</option>
                  <option>TI</option>
                </Form.Control>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <Button type="submit" id="search-form-submit">Buscar</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      
      <Card className="mt-3 mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Todos los usuarios</Card.Title>
          <div style={{
            overflow: "auto",
            maxHeight: "300px"
          }}>
            <TableComponent
              columns={columns}
              data={users}
              dataColumns={userProperties}
              actionRow={handleShowModal}
            />
          </div>
          <p>Mostrando {users.length} usuarios</p>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered >
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Col>
                Imagen
              </Col>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column >
                  Id
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column>
                  Tipo de Documento
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" />
                </Col>
              </Form.Group>              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default UserPage;
