import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableComponent from "../components/TableComponent";
import { Form, Row, Col, Button } from "react-bootstrap";
import { handleChange } from "../utils/utils";


import Loading from "../utils/Loading";
import { LogsApi } from "../apis/logsAPI";

function LogsPage() {
  const [formData, setFormData] = useState({
    doc: "",
    type: "",
    date: "",
  });

  const columns = ["Fecha", "Tipo", "Identificación"];
  const logsProperties = ["date", "type", "doc"];

  const [logs, setLogs] = useState([]);
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = (formData) => {
    setIsLoading(true);
    LogsApi.getBy(formData.doc, formData.type, formData.date)
      .then((logs) => {
        setLogs(logs);
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }

  const getAllLogs = () => {
    LogsApi.getAll()
      .then((logs) => {
        setLogs(logs);
        setDocs([...new Set(logs.map((log) => log.doc))]);
        console.log(docs);
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    switch (event.nativeEvent.submitter.name) {
      case 'buscar':
        search(formData);
        break;
      case 'delete':
        setIsLoading(true);
        LogsApi.delete(formData.doc, formData.type, formData.date)
          .catch((error) => { })
          .finally(() => {
            getAllLogs()
            setIsLoading(false);
          })
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getAllLogs()
  }, []);

  return (
    <Container data-testid="logs-page">
      {isLoading ? <Loading /> : (<>
        <Card className="mt-3 mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>Logs</Card.Title>
            <Form onSubmit={handleSubmit}>
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
                      {docs.map((doc) => {
                        return <option key={"option" + doc} value={doc}>{doc}</option>
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
                      <option value="d">Delete</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col sm={2} className="d-flex align-items-end justify-content-sm-center  mt-4 mt-md-0">
                  <Button type="submit" name="buscar" id="search-form-submit">Buscar</Button>
                </Col>
                <Col sm={2} className="d-flex align-items-end justify-content-sm-center  mt-4 mt-md-0">
                  <Button type="submit" name="delete" variant="danger" id="search-form-submit">Eliminar</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mt-3 mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>Logs</Card.Title>
            <div style={{
              overflow: "auto",
              maxHeight: "300px"
            }}>
              <TableComponent
                columns={columns}
                data={logs}
                dataColumns={logsProperties}
                actionRow={() => { }}
              />
            </div>
            <p>Mostrando {logs.length} logs</p>
          </Card.Body>
        </Card>
      </>)}
    </Container>
  );
}

export default LogsPage;
