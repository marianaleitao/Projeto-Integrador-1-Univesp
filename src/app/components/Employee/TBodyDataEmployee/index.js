import EditModalEmployee from "../EditModalEmployee";
import styles from './ContainerDataEmployee.module.css';

function TBodyDataEmployee({ employee }) {
    return (
        <tr>
            <td> { employee.matricula } </td>
            <td> { employee.nome } </td>
            <td> { employee.funcao } </td>
            <td className={styles.acoes}> { <EditModalEmployee employee={employee} key={employee.id} /> } </td>
        </tr>
    );
}

export default TBodyDataEmployee;