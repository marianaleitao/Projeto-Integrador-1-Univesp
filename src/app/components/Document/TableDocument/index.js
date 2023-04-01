import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
//import { useState, useEffect } from 'react';
import TBodyDataDocument from '../TBodyDataDocument';
import documents from '../../../../json/documents.json';
import styles from './TableDocument.module.css';

function TableDocument() {
    // const [documents, setDocuments] = useState([]);
    //  useEffect(() => {
    //     fetch("http://localhost:8080/api/documents", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((response) => response.json())
    //       .then((data) => setDocuments(data))
    //       .catch((error) => alert('Erro ao carregar dados dos processos.' + error))
    // }, []);

    return (
        <>
            <Container fluid>
                <Table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>Protocolo</th>
                            <th>Requisição</th>
                            <th>Modalidade</th>
                            <th>Origem</th>
                            <th>Descrição</th>
                            <th>Comprador</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                documents?.map((document) => <TBodyDataDocument document={document} key={document.id} />)
                            }
                        </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TableDocument;