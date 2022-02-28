import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap'
const Header = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">CRUD Note App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add">Add</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header