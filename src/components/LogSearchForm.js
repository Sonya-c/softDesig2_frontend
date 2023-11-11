import { Form, Row, Col, Button } from "react-bootstrap";

export default function LogSearchForm({ logs }) {
  return <Form>

    <Row>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Col>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label htmlFor="form-id">Identificación</Form.Label >
          <Form.Control as="select" id="search-form-id">
            <option></option>
            {logs.map((log) => {
              return <option key={"option" + log.id} value={log.id}>{log.id}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col sm={true} className="mt-2">
        <Form.Group>
          <Form.Label htmlFor="form-id-type">Tipo</Form.Label >
          <Form.Control as="select" id="search-form-id">
            <option></option>
            <option>Read</option>
            <option>Create</option>
            <option>Create</option>
            <option>Update</option>
          </Form.Control>
        </Form.Group>
      </Col>

      <Col sm={2} className="d-flex align-items-end justify-content-sm-center">
        <Button type="submit" id="search-form-submit">Buscar</Button>
      </Col>
    </Row>
  </Form>
}