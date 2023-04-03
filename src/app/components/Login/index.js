import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';

function Login() {
    return (
        <Container className={styles.container}>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome de usuário" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        <Button variant="dark" type="submit">Entrar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;