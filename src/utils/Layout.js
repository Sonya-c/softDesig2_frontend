import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">Diseño de software</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Users</Nav.Link>
                    <Nav.Link href="/logs">Logs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container fluid className="mh-100">
            <Outlet />
        </Container>
        
    </>
}

export default Layout;