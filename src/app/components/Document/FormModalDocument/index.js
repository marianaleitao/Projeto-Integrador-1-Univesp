import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import employees from '../../../../json/employees.json';
import departments from '../../../../json/departments.json';

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
                                <option value="1">ATA</option>
                                <option value="2">Compra Direta</option>
                                <option value="3">Licitação</option>
                                <option value="4">Anulação</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formOrigem">
                            <Form.Label>Departamento de Origem</Form.Label>
                            <Form.Select>
                                {
                                    departments.map((department) => <option value={department.id} key={department.id}>{department.nome}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formComprador">
                            <Form.Label>Comprador</Form.Label>
                            <Form.Select>
                                {
                                    employees.map((employee) => <option value={employee.id} key={employee.id}>{employee.nome}</option>)
                                }
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