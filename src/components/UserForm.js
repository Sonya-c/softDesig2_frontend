import { Form, Row, Col, Image, Button } from "react-bootstrap";

export default function UserForm({ create = false, update = false, delete: delete_ = false }) {

  return <Form>
    <Row className="d-flex justify-content-sm-center mb-5 mt-5">
      <Image src="https://via.placeholder.com/150" roundedCircle />
    </Row>

    <Row>
      <Col>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Nombres</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Apellidos</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Identificación</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Tipo Identificación</Form.Label>
          <Col>
            <Form.Control as="select">
              <option></option>
              <option>Cedula</option>
              <option>TI</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Col>

      <Col>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Correo</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Ceular</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Fecha Nacimiento</Form.Label>
          <Col>
            <Form.Control type="date" />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label column>Género</Form.Label>
          <Col>
            <Form.Control as="select">
              <option></option>
              <option>Femenino</option>
              <option>Masculino</option>
              <option>No binario</option>
              <option>Periero no especificarlo</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Col>
    </Row>

    <Row>
      {create && <Col className="d-flex justify-content-sm-center"><Button variant="success">Guardar</Button></Col>}
      {update && <Col className="d-flex justify-content-sm-center"><Button>Crear</Button></Col>}
      {delete_ && <Col className="d-flex justify-content-sm-center"><Button variant="danger">Eliminar</Button></Col>}
    </Row>
  </Form>
}