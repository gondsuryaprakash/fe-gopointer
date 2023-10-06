import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">GoPointer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/" >Home</Link>
            <Link to="/articles" >Articles</Link> */}
          
            <Nav.Link href="/articles">Articles</Nav.Link> 
            {<Nav.Link href="/adminlogin">Login</Nav.Link>}
            {<Nav.Link href="/aboutus">About Us</Nav.Link>}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBarComponent;