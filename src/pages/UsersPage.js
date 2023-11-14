import { UsersApi } from "../apis/usersAPI";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import TableComponent from "../components/TableComponent";

import UserSearchForm from "../components/UserSearchForm";
import Loading from "../utils/Loading";

import ErrorMsg from "../utils/ErrorMsg";

function UsersPage() {
  const navigate = useNavigate();

  const columns = ["Identificación", "Tipo", "Nombres", "Apellidos", "Fecha Nacimiento", "Correo", "Teléfono"];
  const userProperties = ["id", "idType", "names", "lastnames", "birthDate", "email", "phone"];

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleCreateUser = () => {
    navigate("/profile");
  }

  const handleActionRow = (userData) => {
    navigate(`/profile?id=${userData.id}&typeId=${userData.idType}`);
  }

  const searchUseres = (userData) => {
    setIsLoading(true);
    navigate(`/profile?id=${userData.id}&typeId=${userData.idType}`);
  }

  useEffect(() => {
    UsersApi.getAll()
      .then((users) => {
        setUsers(users);
      }).catch((error) => {
        setError(true);
        console.log(error);
      }).then(() => {
        setIsLoading(false);
      });
  }, []);

  return <Container data-testid="user-page" gap={10}>
    {
      (<>
        <Card className="mt-4 mb-2 shadow-sm">
          <Card.Body>
            <Card.Title>Buscar usuario</Card.Title>
            <UserSearchForm users={users} search={searchUseres} />
          </Card.Body>
        </Card>

        <Card className="mt-3 mb-4 shadow-sm">
          <Card.Body>
            <Row>
              <Col sm={10}><Card.Title>Usuarios</Card.Title></Col>
              <Col sm={2} className="d-flex justify-content-sm-center">
                <Button onClick={handleCreateUser}>Crear</Button>
              </Col>
            </Row>
            {isLoading ? <Loading /> : error ? <ErrorMsg /> : <div style={{
              overflow: "auto",
              maxHeight: "300px"
            }}>
              <TableComponent
                columns={columns}
                data={users}
                dataColumns={userProperties}
                actionRow={handleActionRow}
              />
              <p>Mostrando {users.length} usuarios</p>

            </div>}
          </Card.Body>
        </Card>
      </>)}
  </Container>;
}

export default UsersPage;
