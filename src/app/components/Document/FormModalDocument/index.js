import Form from 'react-bootstrap/Form';

function FormModalDocument() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formProtocolo">
                <Form.Label>Número do Protocolo</Form.Label>
                <Form.Control type="text" placeholder="Digite o número do protocolo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRequisicao">
                <Form.Label>Número da requisição</Form.Label>
                <Form.Control type="text" placeholder="Digite o número da requisição" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRequisicao">
                <Form.Label>Número de requisição</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formModalidade">
                <Form.Label>Modalidade da Compra</Form.Label>
                <Form.Select>
                    <option>Modalidade</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOrigem">
                <Form.Label>Departamento de Origem</Form.Label>
                <Form.Select>
                    <option>Origem</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formComprador">
                <Form.Label>Comprador</Form.Label>
                <Form.Select>
                    <option>Comprador</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescricao">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" placeholder="Digite a descrição" />
            </Form.Group>
        </Form>
    );
}

export default FormModalDocument;