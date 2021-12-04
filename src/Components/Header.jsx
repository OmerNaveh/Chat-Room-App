
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            ChatRoom
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              {!props.user?<Link className="navbarLinks" to='/'>Login</Link>:<div className="navbarLinks">{props.user}</div>}
              <Link className="navbarLinks" to='/chat'>Chat</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}