import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import TBodyDataEmployee from '../TBodyDataEmployee';
import styles from './TableEmployee.module.css';
//import { useState, useEffect } from 'react';
import employees from '../../../../json/employees.json';

function Employee() {
    // const [employees, setEmployees] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:8080/api/employees", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }})
    //             .then((response) => response.json())
    //             .then((data) => setEmployees(data))
    //             .catch((error) => alert("Erro ao carregar dados dos funcionários. " + error));
    // }, []);

    return (
        <>
            <Container fluid className={styles.container}>
                <Table>
                    <thead>
                        <tr>
                            <th>Matrícula</th>
                            <th>Nome</th>
                            <th>Função</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees?.map((employee) => <TBodyDataEmployee employee={employee} key={employee.id} />)
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Employee;