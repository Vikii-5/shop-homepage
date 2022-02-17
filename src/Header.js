import { Navbar, Nav, NavDropdown, Container, Button, Badge } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';

export function Header({ cart }) {
  
  return (

    <header>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>

          <Navbar.Brand href="#home">e-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#all-products">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#popular-items">Popular Items</NavDropdown.Item>
                <NavDropdown.Item href="#new-arrivals">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Button className="cart-btn" variant="outline-dark" disabled={cart <= 0 ? true : false}>
              <BsCart3 /> Cart <Badge pill bg="dark">{cart}</Badge>
            </Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  );
}
