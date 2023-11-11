import { Table } from "react-bootstrap";

export default function TableComponent({ data, columns, dataColumns, actionRow }) {
  dataColumns = dataColumns || columns;

  return (<div>
    <Table striped hover borderless >
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={"columns_" + column}>{column}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((element) => {
          return <tr key={"row_" + element.id} onClick={() => actionRow(element)}>
            {dataColumns.map((column) => {

              return <td key={"cell_" + element.id + "_" + column}> {element[column]} </td>
            })}
          </tr>
        })}
      </tbody>
    </Table>
  </div>);
}