function TBodyDataDepartment( { department } ) {
    return (
        <tr>
            <td>{ department.tramite }</td>
            <td>{ department.nome }</td>
        </tr>
    );
}

export default TBodyDataDepartment;