import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
                    <Container className="justify-content-center">
                        <Navbar.Brand>
                            Projeto Integrador 1 &copy; Univesp 2023
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </footer>
    );
}

export default Footer;