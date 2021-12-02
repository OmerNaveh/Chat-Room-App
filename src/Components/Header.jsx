
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {/* <img
              alt="logo"
              src="../../favicon/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            ChatRoom
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Link className="navbarLinks" to='/'>Login</Link>
              <Link className="navbarLinks" to='/chat'>Chat</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}