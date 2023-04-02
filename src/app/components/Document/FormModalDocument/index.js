import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormModalDocument() {
    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formProtocolo">
                            <Form.Label>Número do Protocolo</Form.Label>
                            <Form.Control type="text" placeholder="Digite o número do protocolo" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formRequisicao">
                            <Form.Label>Número da requisição</Form.Label>
                            <Form.Control type="text" placeholder="Digite o número da requisição" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formModalidade">
                            <Form.Label>Modalidade da Compra</Form.Label>
                            <Form.Select>
                                <option>Modalidade</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formOrigem">
                            <Form.Label>Departamento de Origem</Form.Label>
                            <Form.Select>
                                <option>Origem</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formComprador">
                            <Form.Label>Comprador</Form.Label>
                            <Form.Select>
                                <option>Comprador</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Digite a descrição aqui!" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default FormModalDocument;