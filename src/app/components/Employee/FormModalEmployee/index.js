import Form from 'react-bootstrap/Form';

function FormModalEmployee() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formMatricula">
                <Form.Label>Número de Matrícula</Form.Label>
                <Form.Control type="text" placeholder="Digite o número de matrícula" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFuncao">
                <Form.Label>Função</Form.Label>
                <Form.Control type="text" placeholder="Digite a função" />
            </Form.Group>
        </Form>
    );
}

export default FormModalEmployee;