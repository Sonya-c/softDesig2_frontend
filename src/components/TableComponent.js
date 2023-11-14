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
        {data.map((element, index) => {
          return <tr key={"row_" + index} onClick={() => actionRow(element)}>
            {dataColumns.map((column) => {

              return <td key={"cell_" + index + "_" + column}> {element[column]} </td>
            })}
          </tr>
        })}
      </tbody>
    </Table>
  </div>);
}