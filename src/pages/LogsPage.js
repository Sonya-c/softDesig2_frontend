import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import TableComponent from "../components/TableComponent";
import LogSearchForm from "../components/LogSearchForm";

import Loading from "../utils/Loading";
import { LogsApi } from "../apis/logsAPI";

function LogsPage() {
  const columns = ["Fecha", "Tipo", "Identificación"];
  const logsProperties = ["date", "type", "doc"];

  const [allLogs, setAllLogs] = useState([]);
  const [logs, setLogs] = useState([]);

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

  useEffect(() => {
    LogsApi.getAll()
      .then((logs) => {
        setAllLogs(logs);
        setLogs(logs);
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container data-testid="logs-page">
      {isLoading ? <Loading /> : (<>
        <Card className="mt-3 mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>Logs</Card.Title>
            <LogSearchForm logs={allLogs} search={search} />
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
