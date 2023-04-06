import Form from 'react-bootstrap/Form';

function EditFormModalEmployee( { employee, edit } ) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formMatricula">
                <Form.Label>Número de Matrícula</Form.Label>
                <Form.Control type="text" value={employee.matricula} disabled={edit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" value={employee.nome} disabled={edit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFuncao">
                <Form.Label>Função</Form.Label>
                <Form.Control type="text" value={employee.funcao} disabled={edit} />
            </Form.Group>
        </Form>
    );
}

export default EditFormModalEmployee;