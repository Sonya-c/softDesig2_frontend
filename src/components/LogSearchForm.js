import { Form, Row, Col, Button } from "react-bootstrap";
import { handleChange } from "../utils/utils";
import { useState } from "react";

export default function LogSearchForm({ logs }) {
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return <Form onSubmit={handleSubmit}>
    <Row>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date" />
        </Form.Group>
      </Col>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label htmlFor="form-id">Identificación</Form.Label >
          <Form.Control
            as="select"
            id="search-form-id"
            value={formData.id}
            name="id"
            onChange={(event) => handleChange(setFormData, event)}
          >
            <option value=""></option>
            {logs.map((log) => {
              return <option key={"option" + log.id} value={log.id}>{log.id}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label htmlFor="form-id-type">Tipo</Form.Label >
          <Form.Control
            as="select"
            id="search-form-id"
            value={formData.type}
            name="type"
            onChange={(event) => handleChange(setFormData, event)}
          >
            <option value=""></option>
            <option value="c">Create</option>
            <option value="r">Read</option>
            <option value="u">Update</option>
            <option value="d">Create</option>
          </Form.Control>
        </Form.Group>
      </Col>

      <Col sm={2} className="d-flex align-items-end justify-content-sm-center">
        <Button type="submit" id="search-form-submit">Buscar</Button>
      </Col>
    </Row>
  </Form>
}