import { Modal } from "react-bootstrap";

const Msg = ({ show, handleClose, title, body }) => {
    return <Modal variant="danger" centered show={show} onHide={handleClose}>
        <Modal.Title>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
        </Modal.Title>
        <Modal.Body className="">
            <p className="m-0">{body}</p>
        </Modal.Body>
    </Modal>
}

export default Msg;