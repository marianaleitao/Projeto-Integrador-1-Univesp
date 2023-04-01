import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import styles from './TableDepartment.module.css';
import departments from '../../../../json/departments.json';
import TBodyDataDepartment from '../TBodyDataDepartment';
import ModalDepartment from '../ModalDepartment';

function TableDepartment() {
    return (
        <>
            <Container fluid className={styles.container}>
                <section className={styles.modal}>
                    <ModalDepartment />
                </section>
                <Table bordered hover className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>Número Trâmite</th>
                            <th>Nome do Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            departments?.map((department) => <TBodyDataDepartment department={department} key={department.id} />)
                       }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TableDepartment;