export default function ErrorMsg({ msg }) {
    return <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <p>{msg || "Ha ocurrido un error. Intente más tarde."} </p>
    </div>
}