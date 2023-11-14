import { UsersApi } from "../apis/usersAPI";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { handleChange } from "../utils/utils";
import Loading from "../utils/Loading";

function UserForm({ create: create_ = false, user }) {
  const navigate = useNavigate();
  if (user.doc === "") create_ = true;

  const [create, setCreate] = useState(create_);
  const [formData, setFormData] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLoadImage = (event) => {
    const { name, files } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: URL.createObjectURL(files[0]),
    }));
  }

  const handleClose = () => setError(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    switch (event.nativeEvent.submitter.name) {
      case 'create':
        UsersApi.create(formData)
          .catch(() => {
            setError(true);
          })
          .then(() => {
            setCreate(false);
            setIsLoading(false);
          });
        break;
      case 'update':
        UsersApi.update(formData)
          .catch(() => {
            setError(true);
          })
          .then(() => {
            setIsLoading(false);
          });
        break;
      case 'delete':
        UsersApi.delete(formData.doc, formData.docType)
          .catch(() => {
            setError(true);
          })
          .then(() => {
            error ? setIsLoading(false) : navigate("/");
          });
        break;
      default:
        break;
    }
  }

  if (isLoading) return <Loading />

  return <Form data-testid="user-form" onSubmit={handleSubmit}>
    <Row className="d-flex justify-content-center mt-5">
      <Image
        src={formData.profileImage || "https://via.placeholder.com/150"}
        roundedCircle
        height={150}
        width={150}
        style={{ objectFit: "cover" }}
        data-testid="user-form-profile-image"
      />
    </Row>

    <Row className="mb-5">
      <Form.Group as={Col}>
        <Form.Label
          role='button'
          htmlFor="user-form-load-image"
          className="text-primary text-center" column>
          Cambiar imagen
        </Form.Label>
        <Form.Control
          name="profileImage"
          id="user-form-load-image"
          type="file" hidden
          onChange={handleLoadImage}
          accept="image/*"
          data-testid="user-form-load-image"
        />
      </Form.Group>
    </Row>

    <Row>
      <div className="col-sm row-lg">
        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Identificación</Form.Label>
          <Col>
            <Form.Control
              name="doc"
              disabled={!create}
              type="number"
              value={formData.doc}
              onChange={(event) => handleChange(setFormData, event)}
              data-testid="user-form-doc"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Tipo Identificación</Form.Label>
          <Col>
            <Form.Control
              disabled={!create}
              name="docType"
              as="select"
              value={formData.docType}
              onChange={(event) => handleChange(setFormData, event)}
              required
              data-testid="user-form-doc-type"
            >
              <option value=""></option>
              <option value="cc">Cedula</option>
              <option value="ti">TI</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label disabled={!create} column>Fecha Nacimiento</Form.Label>
          <Col>
            <Form.Control
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={(event) => handleChange(setFormData, event)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Género</Form.Label>
          <Col>
            <Form.Control
              name="gender"
              as="select"
              value={formData.gender}
              onChange={(event) => handleChange(setFormData, event)}
              data-testid="user-form-gender"
            >
              <option value="">Periero no especificarlo</option>
              <option value="f">Femenino</option>
              <option value="m">Masculino</option>
              <option value="nb">No binario</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </div>

      <div className="col-sm row-lg">
        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Nombres</Form.Label>
          <Col>
            <Form.Control
              name="names"
              type="text"
              value={formData.names}
              onChange={(event) => handleChange(setFormData, event)}
              required
              data-testid="user-form-names"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Apellidos</Form.Label>
          <Col>
            <Form.Control
              name="lastnames"
              type="text"
              value={formData.lastnames}
              onChange={(event) => handleChange(setFormData, event)}
              required
              data-testid="user-form-lastnames"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Correo</Form.Label>
          <Col>
            <Form.Control
              name="email"
              type="email"
              value={formData.email}
              onChange={(event) => handleChange(setFormData, event)}
              data-testid="user-form-email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Ceular</Form.Label>
          <Row style={{ paddingLeft: "15px" }} className="m-0">
            <Col className="col-2 border mr-0 pl-0 pr-0 d-flex align-items-center justify-content-center" sm={2}>
              <p className="m-0">+57</p>
            </Col>
            <Col className="col-10 ml-0 pl-0" sm={10}>
              <Form.Control
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(event) => handleChange(setFormData, event)}
                data-testid="user-form-phone"
                pattern="([3][0-9]{9})|(60[1-8][0-9]{7})"
                title="Introduzca un número de celular"
              />
            </Col>
          </Row>
        </Form.Group>
      </div>
    </Row>

    <Row className="mt-5 mb-5 d-flex justify-content-center" style={{ gap: "30px" }} >
      {create &&
        <Button
          name="create"
          type="submit"
          variant="success"
          data-testid="user-form-create-btn">Crear</Button>
      }

      {!create &&
        <Button
          name="update"
          type="submit"
          data-testid="user-form-update-btn">Guardar</Button>
      }

      {!create &&
        <Button
          name="delete"
          type="submit"
          variant="danger"
          data-testid="user-form-delete-btn">Eliminar</Button>
      }
    </Row>

    <Modal variant="danger" centered show={error} onHide={handleClose}>
      <Modal.Title>
        <Modal.Header>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
      </Modal.Title>
      <Modal.Body className="">
        <p className="m-0">Un error ha ocurrido. Por favor, intente nuevamente</p>
      </Modal.Body>
    </Modal>
  </Form>
}

UserForm.defaultProps = {
  user: {
    "doc": "",
    "docType": "",
    "names": "",
    "lastnames": "",
    "gender": "",
    "birthDate": "",
    "email": "",
    "phone": "",
    "profileImage": null,
  }
}

export default UserForm;