import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableComponent from "../components/TableComponent";
import LogSearchForm from "../components/LogSearchForm";

function LogsPage() {
  const columns = ["Fecha", "Tipo", "Identificación"];
  const logsProperties = ["date", "type", "id"];

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([
      { "date": "12-03-23", "type": "read", "id": "123" },
      { "date": "12-03-23", "type": "create", "id": "456" },
      { "date": "12-03-23", "type": "update", "id": "789" },
      { "date": "12-03-23", "type": "delete", "id": "ABC" },
    ])
  }, []);

  return (
    <Container data-testid="logs-page">
      <Card className="mt-3 mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Buscar logs</Card.Title>
          <LogSearchForm logs={logs} />
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
    </Container>
  );
}

export default LogsPage;
