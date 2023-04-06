import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditFormModalDocument from '../EditFormModalDocument';
import { useState } from "react";

function EditModalDocument({ document }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edit, setEdit] = useState(true);
    return (

        <>
            <Button variant="out-line dark" onClick={handleShow}>
                <FontAwesomeIcon icon={faEye} />
            </Button>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Processo</Modal.Title>
                    <Button variant="out-line dark" onClick={() => setEdit(false)}>
                        <FontAwesomeIcon icon={faPen} />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <EditFormModalDocument document={document} key={document.id} edit={edit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="outline-dark">Cancelar</Button>
                    <Button variant="dark" onClick={() => setEdit(true)}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModalDocument;