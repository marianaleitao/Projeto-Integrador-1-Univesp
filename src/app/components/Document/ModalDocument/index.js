import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FormModalDocument from '../FormModalDocument';

function ModalDocument() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>NOVO PROCESSO</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Processo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormModalDocument />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="outline-dark">Cancelar</Button>
                    <Button variant="dark">Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDocument;