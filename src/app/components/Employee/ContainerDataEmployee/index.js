import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styles from './ContainerDataEmployee.module.css';

function ContainerDataEmployee({ employee }) {
    return (
        <Card className={styles.card} bg="dark">
            <Card.Title>
                <h2>{employee.nome}</h2>
            </Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <h3>Matrícula:</h3>
                    <span>{employee.matricula}</span>
                </ListGroupItem>

                <ListGroupItem>Função: {employee.funcao}</ListGroupItem>
            </ListGroup>
        </Card >
    );
}

export default ContainerDataEmployee;