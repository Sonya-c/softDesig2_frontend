import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { handleChange } from "../utils/utils";

export default function UserSearchForm({ users, search }) {
  const [formData, setFormData] = useState({
    id: "",
    idType: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    search(formData);
  }

  return <Form onSubmit={handleSubmit}>
    <Row>
      <Col sm={true} className="mt-2">
        <label htmlFor="form-id">Identificación</label>
        <Form.Control
          as="select"
          id="search-form-id"
          name="id"
          onChange={(event) => handleChange(setFormData, event)}
          value={formData.id}
          required
        >
          <option value=""></option>
          {users.map((user) => {
            return <option key={"option" + user.id} value={user.id}>{user.id}</option>
          })}
        </Form.Control>
      </Col>
      <Col sm={true} className="mt-2">
        <label htmlFor="form-id-type">Tipo</label>
        <Form.Control
          as="select"
          id="search-form-id"
          name="idType"
          onChange={(event) => handleChange(setFormData, event)}
          required
        >
          <option value=""></option>
          <option value="cc">Cedula</option>
          <option value="ti">TI</option>
        </Form.Control>
      </Col>

      <Col sm={2} className="d-flex align-items-end justify-content-sm-center mt-4 mt-md-0">
        <Button type="submit" id="search-form-submit">Buscar</Button>
      </Col>
    </Row>
  </Form>
}