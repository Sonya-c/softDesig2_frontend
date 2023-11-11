import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import TableComponent from "../components/TableComponent";

import UserForm from "../components/UserForm";
import { UserSearchForm } from "../components/UserSearchForm";

function UsersPage() {
  const navigate = useNavigate();

  const columns = ["Identificación", "Tipo", "Nombres", "Apellidos", "Correo", "Teléfono"];
  const userProperties = ["id", "type", "names", "lastnames", "email", "phone"];

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShowModal = () => setShowModal(true);

  const handleActionRow = (userData) => {
    navigate(`/profile?id=${userData.id}&typeId=${userData.type}`);
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
          <UserSearchForm users={users} />
        </Card.Body>
      </Card>

      <Card className="mt-3 mb-4 shadow-sm">
        <Card.Body>
          <Row>
            <Col sm={10}><Card.Title>Todos los usuario</Card.Title></Col>
            <Col sm={2} className="d-flex justify-content-sm-center">
              <Button onClick={handleShowModal}>Crear</Button>
            </Col>
          </Row>
          <div style={{
            overflow: "auto",
            maxHeight: "300px"
          }}>
            <TableComponent
              columns={columns}
              data={users}
              dataColumns={userProperties}
              actionRow={handleActionRow}
            />
          </div>
          <p>Mostrando {users.length} usuarios</p>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header>
          <Col sm={10}><Modal.Title>Crear usuario</Modal.Title></Col>
          <Col sm={2} className="d-flex justify-content-sm-end">
            <Button onClick={handleClose}>Close</Button>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <UserForm create />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default UsersPage;
