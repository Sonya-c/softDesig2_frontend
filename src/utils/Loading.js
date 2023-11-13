
import { Spinner } from "react-bootstrap";

export default function Loading() {
    return <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }} />
        <p className="mt-3">Cargando...</p>
    </div>
}