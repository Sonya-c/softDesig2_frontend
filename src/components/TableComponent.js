import { Table } from "react-bootstrap";

export default function TableComponent({ data, columns, dataColumns, actionRow }) {
    dataColumns = dataColumns || columns;
    
    return (<div>
        <Table striped hover borderless >
            <thead>
                <tr>
                    {columns.map((column) => {
                        return <th>{ column }</th>
                    })}
                </tr>
                </thead>
            <tbody>
            {data.map((element) => {
                return <tr key={element.id} onClick={() => actionRow(element)}>
                    {dataColumns.map((column) => {
                        console.log(element, column);
                        return <td> {element[column]} </td>
                    })}
                </tr>
            })}
            </tbody>
        </Table>
    </div>);
}