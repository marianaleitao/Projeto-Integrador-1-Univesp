import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FormModalDepartment from '../FormModalDepartment';

function ModalDepartment() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>NOVO DEPARTAMENTO</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Departamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormModalDepartment />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button>Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDepartment;