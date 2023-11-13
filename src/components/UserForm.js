import { useState } from "react";
import { Form, Row, Col, Image, Button } from "react-bootstrap";
import { handleChange } from "../utils/utils";

function UserForm({ create = false, user }) {
  const [formData, setFormData] = useState(user);

  const handleLoadImage = (event) => {
    const { name, files } = event.target;
    console.log(name, files[0]);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: URL.createObjectURL(files[0]),
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.nativeEvent.submitter.name);
  }

  return <Form data-testid="user-form" onSubmit={handleSubmit}>
    <Row className="d-flex justify-content-sm-center mt-5">
      <Image
        src={formData.profileImage}
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
      <Col>
        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Identificación</Form.Label>
          <Col>
            <Form.Control
              name="id"
              disabled={!create}
              type="text"
              value={formData.id}
              onChange={(event) => handleChange(setFormData, event)}
              data-testid="user-form-id"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Tipo Identificación</Form.Label>
          <Col>
            <Form.Control
              disabled={!create}
              name="idType"
              as="select"
              value={formData.idType}
              onChange={(event) => handleChange(setFormData, event)}
              required
              data-testid="user-form-id-type"
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
              required
              data-testid="user-form-gender"
            >
              <option value="">Periero no especificarlo</option>
              <option value="f">Femenino</option>
              <option value="m">Masculino</option>
              <option value="nb">No binario</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Col>

      <Col>
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
              type="text"
              value={formData.email}
              onChange={(event) => handleChange(setFormData, event)}
              data-testid="user-form-email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label column>Ceular</Form.Label>
          <Col>
            <Form.Control
              name="phone"
              type="text"
              value={formData.phone}
              onChange={(event) => handleChange(setFormData, event)}
              data-testid="user-form-phone"
            />
          </Col>
        </Form.Group>

      </Col>
    </Row>

    <Row>
      {create && <Col className="d-flex justify-content-sm-center">
        <Button
          name="create"
          type="submit"
          variant="success"
          data-testid="user-form-create-btn">Crear</Button>
      </Col>}

      {!create && <Col className="d-flex justify-content-sm-center">
        <Button
          name="update"
          type="submit"
          data-testid="user-form-update-btn">Guardar</Button>
      </Col>}

      {!create && <Col className="d-flex justify-content-sm-center">
        <Button
          name="delete"
          type="submit"
          variant="danger"
          data-testid="user-form-delete-btn">Eliminar</Button>
      </Col>}
    </Row>
  </Form>
}

UserForm.defaultProps = {
  user: {
    "id": "",
    "idType": "",
    "names": "",
    "lastnames": "",
    "gender": "",
    "birthDate": "",
    "email": "",
    "phone": "",
    "profileImage": "https://via.placeholder.com/150",
  }
}

export default UserForm;