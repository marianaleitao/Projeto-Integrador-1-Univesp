function TBodyDataDocument( { document } ) {
    console.log(document)
    return (
        <tr>
            <td>{ document.protocolo }</td>
            <td>{ document.requisicao }</td>
            <td>{ document.modalidade }</td>
            <td>{ document.origem }</td>
            <td>{ document.descricao }</td>
            <td>{ document.comprador } </td>
        </tr>
    );
}

export default TBodyDataDocument;