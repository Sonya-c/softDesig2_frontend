import { Form, Row, Col, Button } from "react-bootstrap";

export function UserSearchForm({ users }) {
  return <Form>
    <Row>
      <Col sm={true} className="mt-2">
        <label htmlFor="form-id">Identificación</label>
        <Form.Control required as="select" id="search-form-id">
          <option></option>
          {users.map((user) => {
            return <option key={"option" + user.id} value={user.id}>{user.id}</option>
          })}
        </Form.Control>
      </Col>
      <Col sm={true} className="mt-2">
        <label htmlFor="form-id-type">Tipo</label>
        <Form.Control required as="select" id="search-form-id">
          <option></option>
          <option>Cedula</option>
          <option>TI</option>
        </Form.Control>
      </Col>

      <Col sm={2} className="d-flex align-items-end justify-content-sm-center">
        <Button type="submit" id="search-form-submit">Buscar</Button>
      </Col>
    </Row>
  </Form>
}