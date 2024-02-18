import { Navbar , Nav , Container } from "react-bootstrap";

const Header = ()=>{
    return(
        <header>
            <Navbar bg='light' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>Mern-Auth</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/login'>Login</Nav.Link>
                            <Nav.Link href='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header