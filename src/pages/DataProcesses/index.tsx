import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";

export default function DataProcesses () {

    return (
        <Form>
            <Container fluid>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formNumeroProtocolo">
                            <Form.Label>Protocolo</Form.Label>
                            <Form.Control type="text" placeholder="Número do Protocolo" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formNumeroRequisicao">
                            <Form.Label>Requisição</Form.Label>
                            <Form.Control type="text" placeholder="Número da Requisição" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDepartamentoOrigem">
                            <Form.Label>Local de Origem</Form.Label>
                            <Form.Select>
                                <option value="0">Selecione o local de origem</option>
                                <option value="1">SECRETARIA DE EDUCAÇÃO</option>
                                <option value="2">SECRETARIA DE FINANÇAS</option>
                                <option value="3">SECRETARIA DE ESPORTES</option>
                                <option value="4">SECRETARIA DE ADMINISTRAÇÃO E PLANEJAMENTO</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formModalidade">
                            <Form.Label> Modalidade </Form.Label>
                            <Form.Select>
                                <option value="0">Selecione uma modalidade</option>
                                <option value="1">ATA</option>
                                <option value="2">COMPRA DIRETA</option>
                                <option value="3">LICITAÇÃO</option>
                                <option value="4">ANULAÇÃO</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Col>
                </Row>
                <div>
                    <Button type="submit">Salvar</Button>
                </div>
            </Container>
        </Form>
    )
}