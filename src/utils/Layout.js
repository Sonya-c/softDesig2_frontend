import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useLocation, Link } from "react-router-dom";

const Layout = () => {
    const location = useLocation()

    return <Container fluid className="d-flex vh-100 flex-column m-0" style={{ padding: 0, margin: 0 }}>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">{
                    location.pathname === "/" ? "Usuarios" :
                        location.pathname === "/profile" ? "Perfil" :
                            location.pathname === "/logs" ? "Logs" : "404"
                }
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" data-testid="link-to-user-page">Usuarios</Nav.Link>
                    <Nav.Link as={Link} to="/logs" data-testid="link-to-logs-page">Logs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container fluid className="row flex-fill d-flex justify-content-start m-0">
            <Outlet />
        </Container>
    </Container>
}

export default Layout;