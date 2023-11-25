import { UsersApi } from "../apis/usersAPI";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import TableComponent from "../components/TableComponent";

import Msg from "../components/Msg";

import { handleChange } from "../utils/utils";
import Loading from "../utils/Loading";


function UsersPage() {
  const navigate = useNavigate();

  const columns = ["Identificación", "Tipo", "Nombres", "Apellidos", "Fecha Nacimiento", "Correo", "Teléfono"];
  const userProperties = ["doc", "docType", "names", "lastnames", "birthDate", "email", "phone"];

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    doc: "",
    docType: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [deletedSuccess, setDeletedSuccess] = useState(false);

  const getUsers = () => {
    UsersApi.getAll()
      .then((users) => {
        setUsers(users);
      }).catch((error) => {
        setError(true);
        setUsers([]);
        console.log(error);
      }).then(() => {
        setIsLoading(false);
      });
  }

  const createUser = () => {
    navigate("/profile");
  }

  const editDeleteUser = (userData) => {
    navigate(`/profile?doc=${userData.doc}&docType=${userData.docType}`);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (event.nativeEvent.submitter.name) {
      case 'update':
        editDeleteUser(formData);
        break;
      case 'delete':
        setIsLoading(false);
        UsersApi.delete(formData.doc, formData.docType)
          .then((response) => {
            setDeletedSuccess(true);
            getUsers();
          })
          .catch((error) => {
            setError(true);
          })
          .finally(() => setIsLoading(true))
        break;
      case 'search':
        editDeleteUser(formData);
        break;
      default:
        break;
    }

  }

  useEffect(() => {
    getUsers();
  }, []);

  return <Container data-testid="user-page" gap={10}>


    <Card className="mt-4 mb-2 shadow-sm">
      <Card.Body>
        <Card.Title>Buscar usuario</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={true} className="mt-2">
              <label htmlFor="form-doc">Identificación</label>
              <Form.Control
                as="select"
                id="search-form-doc"
                name="doc"
                onChange={(event) => handleChange(setFormData, event)}
                value={formData.doc}
                required
              >
                <option value=""></option>
                {users.map((user) => {
                  return <option key={"option" + user.doc} value={user.doc}>{user.doc}</option>
                })}
              </Form.Control>
            </Col>
            <Col sm={true} className="mt-2">
              <label htmlFor="form-doc-type">Tipo</label>
              <Form.Control
                as="select"
                id="search-form-doc"
                name="docType"
                onChange={(event) => handleChange(setFormData, event)}
                required
              >
                <option value=""></option>
                <option value="cc">Cedula</option>
                <option value="ti">TI</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="d-flex justify-content-sm-center">
              <Button
                name="search"
                type="submit"
                variant="warning">Buscar</Button>
            </Col>

            <Col className="d-flex justify-content-sm-center">
              <Button
                name="create"
                onClick={createUser}
                variant="success">Crear</Button>
            </Col>

            <Col className="d-flex justify-content-sm-center">
              <Button
                name="update"
                type="submit"
                data-testid="user-form-update-btn">Editar</Button>
            </Col>
            <Col className="d-flex justify-content-sm-center">
              <Button
                name="delete"
                type="submit"
                variant="danger"
                data-testid="user-form-delete-btn">Eliminar</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>

    <Card className="mt-3 mb-4 shadow-sm">
      <Card.Body>
        <Row>
          <Col sm={10}><Card.Title>Usuarios</Card.Title></Col>
        </Row>
        {isLoading ? <Loading /> : <div style={{
          overflow: "auto",
          maxHeight: "300px"
        }}>
          <TableComponent
            columns={columns}
            data={users}
            dataColumns={userProperties}
            actionRow={editDeleteUser}
          />
          <p>Mostrando {users.length} usuarios</p>

        </div>}
      </Card.Body>
    </Card>

    <Msg show={error} handleClose={() => setError(false)} />
    <Msg show={deletedSuccess} handleClose={() => setDeletedSuccess(false)} title={"Usuario eliminado"} body={"El usuario fue eliminado correctamente"} />
  </Container>;
}

export default UsersPage;
