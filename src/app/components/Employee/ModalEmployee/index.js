import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FormModalEmployee from '../FormModalEmployee';

function ModalEmployee() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>NOVO FUNCIONÁRIO</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Funcionário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormModalEmployee />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button>Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEmployee;