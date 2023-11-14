import { Form, Row, Col, Button } from "react-bootstrap";
import { handleChange } from "../utils/utils";
import { useState } from "react";

export default function LogSearchForm({ logs }) {
  const [formData, setFormData] = useState({
    doc: "",
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
            type="date"
            value={formData.date}
            name="date"
            onChange={(event) => handleChange(setFormData, event)}
          />
        </Form.Group>
      </Col>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label htmlFor="form-doc">Identificación</Form.Label >
          <Form.Control
            as="select"
            id="search-form-doc"
            value={formData.doc}
            name="doc"
            onChange={(event) => handleChange(setFormData, event)}
          >
            <option value=""></option>
            {logs.map((log) => {
              return <option key={"option" + log.doc} value={log.doc}>{log.doc}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label htmlFor="form-doc-type">Tipo</Form.Label >
          <Form.Control
            as="select"
            id="search-form-doc"
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

      <Col sm={2} className="d-flex align-items-end justify-content-sm-center  mt-4 mt-md-0">
        <Button type="submit" id="search-form-submit">Buscar</Button>
      </Col>
    </Row>
  </Form>
}