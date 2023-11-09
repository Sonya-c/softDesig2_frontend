import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return <>
        <main>
            <Outlet />
        </main>
        <footer>
            <Link to="/">Clients</Link>
            <Link to="/logs">Logs</Link>
        </footer>
    </>
}

export default Layout;