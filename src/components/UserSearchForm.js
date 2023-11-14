import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { handleChange } from "../utils/utils";

export default function UserSearchForm({ users, search }) {
  const [formData, setFormData] = useState({
    doc: "",
    docType: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    search(formData);
  }

  return <Form onSubmit={handleSubmit}>
    <Row>
      <Col sm={true} className="mt-2">
        <label htmlFor="form-doc">Identificación</label>
        <Form.Control
          as="select"
          id="search-form-doc"
          name="doc"
          onChange={(event) => handleChange(setFormData, event)}
          value={formData.doc}

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
        >
          <option value=""></option>
          <option value="cc">Cedula</option>
          <option value="ti">TI</option>
        </Form.Control>
      </Col>

      <Col sm={2} className="d-flex align-items-end justify-content-sm-center mt-4 mt-md-0">
        <Button type="submit" doc="search-form-submit">Buscar</Button>
      </Col>
    </Row>
  </Form>
}