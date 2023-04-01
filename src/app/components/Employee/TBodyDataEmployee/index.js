function ContainerDataEmployee({ employee }) {
    return (
        <tr>
            <td> { employee.funcionarioMatricula } </td>
            <td> { employee.funcionarioNome } </td>
            <td> { employee.funcionarioFuncao } </td>
        </tr>
    );
}

export default ContainerDataEmployee;