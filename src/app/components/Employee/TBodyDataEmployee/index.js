function TBodyDataEmployee({ employee }) {
    return (
        <tr>
            <td> { employee.matricula } </td>
            <td> { employee.nome } </td>
            <td> { employee.funcao } </td>
        </tr>
    );
}

export default TBodyDataEmployee;