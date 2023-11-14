import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableComponent from "../components/TableComponent";
import LogSearchForm from "../components/LogSearchForm";
import { delay } from "../utils/utils";
import Loading from "../utils/Loading";

function LogsPage() {
  const columns = ["Fecha", "Tipo", "Identificación"];
  const logsProperties = ["date", "type", "doc"];

  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLogs([
      { "date": "2023-09-1", "type": "read", "doc": "123" },
      { "date": "2023-09-2", "type": "create", "doc": "456" },
      { "date": "2023-09-3", "type": "update", "doc": "789" },
      { "date": "2023-09-4", "type": "delete", "doc": "ABC" },
    ]);

    delay(5000).then(() => // this is just for testing purposes, remove it when you use the API
      setIsLoading(false)
    );
  }, []);

  return (
    <Container data-testid="logs-page">
      {isLoading ? <Loading /> : (<>
        <Card className="mt-3 mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>Logs</Card.Title>
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
      </>)}
    </Container>
  );
}

export default LogsPage;
