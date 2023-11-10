import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation()

    return <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">{
                    location.pathname === "/" ? "Usuarios" :
                        location.pathname === "/logs" ? "Logs" : "404"
                }
                </Navbar.Brand>
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