import Container from 'react-bootstrap/Container';
import ContainerDataEmployee from './ContainerDataEmployee';
import employees from '../../../json/employees.json';
import styles from './Employee.module.css';

function Employee() {
    return (
        <>
            <Container fluid className={styles.container}>
                {
                    employees.map((employee) => <ContainerDataEmployee employee={employee} key={employee.id} />)
                }
            </Container>
        </>
    );
}

export default Employee;