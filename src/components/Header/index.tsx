import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header >
          <nav>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/processes">Processos</Nav.Link>
                  <Nav.Link as={Link} to="/employees">Funcionários</Nav.Link>
                  <Nav.Link as={Link} to="/departments">Departamentos</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </nav>
          <section>
            <h1>Projeto Integrador I - Univesp 2023</h1>
          </section>
        </header>
    );
  }
  
  
  export default Header;