import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import EditFormModalEmployee from '../EditFormModalEmployee';

function EditModalEmployee({ employee }) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    

    return (
        <>
            <Button variant="out-line dark" onClick={handleShow}>
                <FontAwesomeIcon icon={faEye} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Funcionário</Modal.Title>
                    <Button variant="out-line dark" onClick={() => setEdit(!edit)}>
                        <FontAwesomeIcon icon={faPen} />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <EditFormModalEmployee employee={employee} key={employee.id} edit={edit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="outline-dark">Cancelar</Button>
                    <Button variant="dark">Salvar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModalEmployee;