import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

function Login() {

    const {Login} = useAuth();
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleenter = () => {
        if (!username | !password) {
            setError("Preencher todos os campos");
            return;
        }

        const res = Login(username, password);

        if (res) {
            setError(res);
            return;
        }

        navigate("/documents");
    };
    

    return (
        <Container className={styles.container}>
            <Row>
                <Col >
                    <Form >
                        <Form.Label>Sistema de Login</Form.Label>
                        
                        <Form.Group className="mb-3" controlId="formUsername" >
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome de usuário" value={username} onChange={(e) => [setUsername(e.target.value), setError("")]} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword" >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" value={password} onChange={(e) => [setPassword(e.target.value), setError("")]}  />
                        </Form.Group>
                        
                        <Form.Group classeName="mb-3" controlId='formCheckbox'>
                            <Form.Check type='checkbox' label="Check me out" />
                        </Form.Group>

                        <Button variant="dark" type="submit" onClick={handleenter}>Entrar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;