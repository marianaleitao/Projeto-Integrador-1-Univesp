import EditModalDocument from "../EditModalDocument";

function TBodyDataDocument({ document }) {
    console.log(document)
    return (
        <tr>
            <td>{document.protocolo}</td>
            <td>{document.requisicao}</td>
            <td>{document.modalidade}</td>
            <td>{document.origem.nome}</td>
            <td>{document.descricao}</td>
            <td>{document.comprador.nome} </td>
            <td>
                <EditModalDocument document={document} key={document.id}/>
            </td>
        </tr>
    );
}

export default TBodyDataDocument;